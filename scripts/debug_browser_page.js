const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9333;

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=' + port,
  '--disable-gpu',
  '--no-sandbox',
  '--user-data-dir=C:\\Users\\Admin\\AppData\\Local\\Temp\\chrome_debug_profile'
]);

setTimeout(async () => {
  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/json/list`, res => {
        let raw = '';
        res.on('data', d => raw += d);
        res.on('end', () => resolve(JSON.parse(raw)));
      }).on('error', reject);
    });

    const page = listRes[0];
    console.log('Page websocket url:', page.webSocketDebuggerUrl);

    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      console.log('Connected to Chrome DevTools Protocol!');
      ws.send(JSON.stringify({ id: 1, method: 'Console.enable' }));
      ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
      ws.send(JSON.stringify({ id: 3, method: 'Network.enable' }));
      ws.send(JSON.stringify({
        id: 4,
        method: 'Page.navigate',
        params: { url: 'http://localhost:4037/portfolio/website-and-web-application-projects' }
      }));
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Console.messageAdded') {
        console.log('[BROWSER CONSOLE]', msg.params.message.text);
      }
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('[CONSOLE ' + msg.params.type + ']', msg.params.args.map(a => a.value || a.description).join(' '));
      }
      if (msg.method === 'Network.loadingFailed') {
        console.log('[NETWORK FAILED]', msg.params.errorText, msg.params.requestId);
      }
      if (msg.method === 'Page.loadEventFired') {
        console.log('Page load event fired! Waiting 3s for hydration and fetch...');
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: {
              expression: `({
                title: document.title,
                bodyText: document.body.innerText.slice(0, 1000),
                h1: document.querySelector('h1')?.innerText,
                cardsCount: document.querySelectorAll('.grid > a').length,
                cardH3s: Array.from(document.querySelectorAll('.grid h3')).map(h => h.innerText)
              })`,
              returnByValue: true
            }
          }));
        }, 3000);
      }
      if (msg.id === 10) {
        console.log('PAGE EVAL RESULT:\n', JSON.stringify(msg.result.result.value, null, 2));
        ws.close();
        chrome.kill();
        process.exit(0);
      }
    };

  } catch (err) {
    console.error('Error in debug script:', err);
    chrome.kill();
    process.exit(1);
  }
}, 2000);
