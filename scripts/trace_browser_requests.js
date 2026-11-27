const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9555;

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=' + port,
  '--disable-gpu',
  '--no-sandbox',
  '--user-data-dir=C:\\Users\\Admin\\AppData\\Local\\Temp\\chrome_debug_profile_3'
]);

async function waitForChrome(retries = 10) {
  for (let i = 0; i < retries; i++) {
    try {
      const listRes = await new Promise((resolve, reject) => {
        const req = http.get(`http://127.0.0.1:${port}/json/list`, res => {
          let raw = '';
          res.on('data', d => raw += d);
          res.on('end', () => {
            try { resolve(JSON.parse(raw)); } catch(e) { reject(e); }
          });
        });
        req.on('error', reject);
      });
      if (listRes && listRes.length > 0) return listRes[0];
    } catch(e) {}
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error('Chrome remote debugging did not respond');
}

(async () => {
  try {
    const page = await waitForChrome();
    console.log('Connected to Chrome target!');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    const requests = {};

    ws.onopen = () => {
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
      if (msg.method === 'Network.requestWillBeSent') {
        requests[msg.params.requestId] = msg.params.request.url;
        if (!msg.params.request.url.includes('_next/static')) {
          console.log('[REQ]', msg.params.requestId, msg.params.request.url);
        }
      }
      if (msg.method === 'Network.responseReceived') {
        const url = requests[msg.params.requestId] || msg.params.response.url;
        if (!url.includes('_next/static')) {
          console.log('[RES]', msg.params.response.status, url);
        }
      }
      if (msg.method === 'Network.loadingFailed') {
        console.log('[FAILED]', msg.params.errorText, requests[msg.params.requestId]);
      }
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('[CONSOLE ' + msg.params.type + ']', msg.params.args.map(a => a.value || a.description).join(' '));
      }
      if (msg.method === 'Page.loadEventFired') {
        console.log('Page load event fired! Waiting 4s for dynamic fetch...');
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: {
              expression: `({
                title: document.title,
                h1: document.querySelector('h1')?.innerText,
                cardsCount: document.querySelectorAll('.grid > a').length,
                cardH3s: Array.from(document.querySelectorAll('.grid h3')).map(h => h.innerText),
                cardImages: Array.from(document.querySelectorAll('.grid img')).map(img => img.src)
              })`,
              returnByValue: true
            }
          }));
        }, 4000);
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
})();
