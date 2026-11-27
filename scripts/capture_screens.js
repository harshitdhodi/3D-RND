const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempDir = path.resolve('3D-RND', 'public', 'temp_screens');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const targets = [
  // 1. Moultool
  { id: 'moultool_1', url: 'https://moultoolsystems.com/', w: 1600, h: 1000, budget: 5000 },
  { id: 'moultool_2', url: 'https://moultoolsystems.com/services/', w: 1600, h: 1000, budget: 5000 },
  { id: 'moultool_3', url: 'https://moultoolsystems.com/', w: 430, h: 932, budget: 5000 },

  // 2. OPPL
  { id: 'oppl_1', url: 'https://rndtd.com/demos/oppl/', w: 1600, h: 1000, budget: 5000 },
  { id: 'oppl_2', url: 'https://rndtd.com/demos/oppl/our-story/', w: 1600, h: 1000, budget: 5000 },
  { id: 'oppl_3', url: 'https://rndtd.com/demos/oppl/', w: 430, h: 932, budget: 5000 },

  // 3. HygineLab
  { id: 'hyginelab_1', url: 'http://hyginelab.com/', w: 1600, h: 1000, budget: 5000 },
  { id: 'hyginelab_2', url: 'http://hyginelab.com/services/', w: 1600, h: 1000, budget: 5000 },
  { id: 'hyginelab_3', url: 'http://hyginelab.com/', w: 430, h: 932, budget: 5000 },

  // 4. Jyoti Umbrella
  { id: 'jyoti_1', url: 'https://jyoti-umbrella-taupe.vercel.app/', w: 1600, h: 1000, budget: 6000 },
  { id: 'jyoti_2', url: 'https://jyoti-umbrella-taupe.vercel.app/', w: 1400, h: 900, budget: 8000 },
  { id: 'jyoti_3', url: 'https://jyoti-umbrella-taupe.vercel.app/', w: 430, h: 932, budget: 6000 },

  // 5. TAGA
  { id: 'taga_1', url: 'https://taga.co.in/', w: 1600, h: 1000, budget: 5000 },
  { id: 'taga_2', url: 'https://taga.co.in/gallery/', w: 1600, h: 1000, budget: 5000 },
  { id: 'taga_3', url: 'https://taga.co.in/', w: 430, h: 932, budget: 5000 },
];

for (const t of targets) {
  const dest = path.join(tempDir, `${t.id}.png`);
  console.log(`Capturing ${t.id} from ${t.url} (${t.w}x${t.h})...`);
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    `--screenshot=${dest}`,
    `--window-size=${t.w},${t.h}`,
    `--virtual-time-budget=${t.budget}`,
    t.url
  ];

  const res = spawnSync(chromePath, args);
  if (fs.existsSync(dest)) {
    console.log(`✓ Saved ${t.id}.png (${fs.statSync(dest).size} bytes)`);
  } else {
    console.error(`✗ Failed to capture ${t.id}`);
  }
}

console.log('Capture phase complete.');
