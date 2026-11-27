const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targetPng = path.resolve('3D-RND', 'public', 'test_cap.png');

console.log('Target:', targetPng);

const args = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  `--screenshot=${targetPng}`,
  '--window-size=1440,900',
  '--virtual-time-budget=5000',
  'https://example.com'
];

const result = spawnSync(chromePath, args, { stdio: 'inherit' });
console.log('Result status:', result.status);
console.log('File exists:', fs.existsSync(targetPng));
if (fs.existsSync(targetPng)) {
  console.log('Size:', fs.statSync(targetPng).size);
}
