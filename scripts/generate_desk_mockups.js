const fs = require('fs');
const path = require('path');
const sharp = require('../node_modules/sharp');

const TEMPLATE_PATH = 'C:/Users/Admin/.gemini/antigravity/brain/9b9a8fbb-418c-4e72-8a12-d6a820024dc0/.user_uploaded/media_1795763147811_02adfcb6.jpg';

const TEMP_DIR = path.resolve(__dirname, '..', 'public', 'temp_screens');
const PORT_DIR = path.resolve(__dirname, '..', 'public', 'protfolio image');
const UPLOAD_DIR = path.resolve(__dirname, '..', 'public', 'uploads');

if (!fs.existsSync(PORT_DIR)) fs.mkdirSync(PORT_DIR, { recursive: true });
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildBrowserBarSvg(width, height, title, url, accentColor) {
  const safeTitle = escapeXml(title);
  const safeUrl = escapeXml(url);
  const color = accentColor || '#FFD400';

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tabGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#2d3238"/>
        <stop offset="100%" stop-color="#24282d"/>
      </linearGradient>
    </defs>
    <!-- Background of entire chrome top bar -->
    <rect width="${width}" height="${height}" fill="#191c1f"/>

    <!-- TABS BAR (top 35px) -->
    <!-- Inactive background tab 1 -->
    <rect x="8" y="7" width="130" height="28" rx="6" fill="#141719"/>
    <circle cx="20" cy="21" r="3.5" fill="#5f6368"/>
    <text x="30" y="24" fill="#9aa0a6" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10.5">RND Portfolio</text>

    <!-- Active Tab -->
    <path d="M 144 35 L 144 13 Q 144 7 150 7 L 380 7 Q 386 7 386 13 L 386 35 Z" fill="url(#tabGrad)"/>
    <!-- Brand Favicon Dot / Icon -->
    <circle cx="160" cy="21" r="4.5" fill="${color}"/>
    <!-- Tab Title -->
    <text x="172" y="24.5" fill="#f1f3f4" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="500">${safeTitle}</text>
    <!-- Tab close X -->
    <text x="370" y="24" fill="#9aa0a6" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12">✕</text>

    <!-- New Tab (+) Button -->
    <text x="398" y="25" fill="#9aa0a6" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="15" font-weight="300">+</text>

    <!-- Window Controls on Right (Windows style matching reference image) -->
    <g transform="translate(${width - 80}, 0)">
      <!-- Minimize -->
      <line x1="12" y1="18" x2="22" y2="18" stroke="#9aa0a6" stroke-width="1.2"/>
      <!-- Maximize -->
      <rect x="34" y="13" width="9" height="9" fill="none" stroke="#9aa0a6" stroke-width="1.2"/>
      <!-- Close -->
      <line x1="56" y1="13" x2="65" y2="22" stroke="#9aa0a6" stroke-width="1.2"/>
      <line x1="65" y1="13" x2="56" y2="22" stroke="#9aa0a6" stroke-width="1.2"/>
    </g>

    <!-- NAVIGATION & ADDRESS BAR (y=35 to 70) -->
    <rect x="0" y="35" width="${width}" height="35" fill="#24282d"/>
    <line x1="0" y1="35" x2="${width}" y2="35" stroke="#181a1c" stroke-width="0.8"/>

    <!-- Nav buttons -->
    <g transform="translate(14, 44)">
      <!-- Back arrow -->
      <path d="M 10 9 L 4 9 M 7 6 L 4 9 L 7 12" stroke="#9aa0a6" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Forward arrow -->
      <path d="M 22 9 L 28 9 M 25 6 L 28 9 L 25 12" stroke="#5f6368" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Refresh arrow -->
      <path d="M 46 6 A 4.5 4.5 0 1 1 42 10.5 M 46 6 L 46 9" stroke="#9aa0a6" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </g>

    <!-- Address Bar Pill -->
    <g transform="translate(76, 40)">
      <rect x="0" y="0" width="${width - 165}" height="25" rx="12.5" fill="#181b1e" stroke="#33373c" stroke-width="0.8"/>
      <!-- Lock / HTTPS Badge -->
      <g transform="translate(12, 6)">
        <rect x="1" y="5" width="8" height="6" rx="1" fill="#8ab4f8"/>
        <path d="M 3 5 L 3 3 A 2 2 0 0 1 7 3 L 7 5" fill="none" stroke="#8ab4f8" stroke-width="1.2"/>
      </g>
      <!-- URL Text -->
      <text x="30" y="16.5" fill="#bdc1c6" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, monospace" font-size="11" font-weight="400">${safeUrl}</text>
    </g>

    <!-- Right toolbar icons (puzzle, profile, menu) -->
    <g transform="translate(${width - 80}, 44)">
      <!-- Extension / Star icon -->
      <polygon points="12,5 14,10 19,10 15,13 17,18 12,15 7,18 9,13 5,10 10,10" fill="#9aa0a6" transform="scale(0.8)"/>
      <!-- User profile circle -->
      <circle cx="36" cy="12" r="7.5" fill="#3c4043"/>
      <circle cx="36" cy="10" r="3" fill="#9aa0a6"/>
      <path d="M 30.5 17 A 6 6 0 0 1 41.5 17" fill="none" stroke="#9aa0a6" stroke-width="1"/>
      <!-- 3 dots menu -->
      <circle cx="58" cy="7" r="1.5" fill="#9aa0a6"/>
      <circle cx="58" cy="12" r="1.5" fill="#9aa0a6"/>
      <circle cx="58" cy="17" r="1.5" fill="#9aa0a6"/>
    </g>

    <!-- Bottom border of browser bar -->
    <line x1="0" y1="69" x2="${width}" y2="69" stroke="#33373c" stroke-width="1"/>
  </svg>
  `;
}

async function createDeskMockup({ screenImage, outputFile, title, url, accentColor }) {
  const SCREEN_WIDTH = 1024;
  const SCREEN_HEIGHT = 578;
  const BROWSER_BAR_HEIGHT = 70;
  const CONTENT_HEIGHT = SCREEN_HEIGHT - BROWSER_BAR_HEIGHT; // 508

  // 1. Prepare Browser Bar Buffer
  const browserBarSvg = buildBrowserBarSvg(SCREEN_WIDTH, BROWSER_BAR_HEIGHT, title, url, accentColor);
  const browserBarBuffer = Buffer.from(browserBarSvg);

  // 2. Prepare Website Screenshot Buffer
  let contentBuffer;
  if (fs.existsSync(screenImage)) {
    contentBuffer = await sharp(screenImage)
      .resize(SCREEN_WIDTH, CONTENT_HEIGHT, {
        fit: 'cover',
        position: 'top',
        kernel: 'lanczos3'
      })
      .toBuffer();
  } else {
    console.warn(`Screen image missing: ${screenImage}, creating fallback placeholder`);
    contentBuffer = await sharp({
      create: {
        width: SCREEN_WIDTH,
        height: CONTENT_HEIGHT,
        channels: 3,
        background: '#0d0f11'
      }
    }).png().toBuffer();
  }

  // 3. Composite Browser Bar + Content into complete Screen
  const screenBuffer = await sharp({
    create: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      channels: 4,
      background: { r: 18, g: 20, b: 23, alpha: 1 }
    }
  })
    .composite([
      { input: browserBarBuffer, top: 0, left: 0 },
      { input: contentBuffer, top: BROWSER_BAR_HEIGHT, left: 0 }
    ])
    .png()
    .toBuffer();

  // 4. Upscale Desk Setup Base Template (2x -> 1496 x 994)
  const base2xBuffer = await sharp(TEMPLATE_PATH)
    .resize(1496, 994, { kernel: 'lanczos3' })
    .toBuffer();

  // 5. Composite Screen into Monitor Bounding Box:
  // In 1496x994: x=240, y=126
  await sharp(base2xBuffer)
    .composite([
      {
        input: screenBuffer,
        top: 126,
        left: 240
      }
    ])
    .png({ quality: 95 })
    .toFile(outputFile);

  console.log(`✓ Generated Desk Mockup: ${path.basename(outputFile)}`);
}

const mockupList = [
  // 1. MOULTOOL SYSTEMS (3 Mockups)
  {
    screenImage: path.join(TEMP_DIR, 'moultool_1.png'),
    filename: 'Moultool Systems Precision Engineering Desktop Showcase.png',
    title: 'Moultool Systems | Precision Injection Moulds',
    url: 'https://moultoolsystems.com/',
    accentColor: '#FFD400'
  },
  {
    screenImage: path.join(TEMP_DIR, 'moultool_2.png'),
    filename: 'Moultool Systems Tooling Capabilities and Machine Fleet.png',
    title: 'CNC Machinery & Tooling Fleet | Moultool',
    url: 'https://moultoolsystems.com/services/',
    accentColor: '#FFD400'
  },
  {
    screenImage: path.join(TEMP_DIR, 'moultool_3.png'),
    filename: 'Moultool Systems Responsive Mobile Engineering Portal.png',
    title: 'Precision Injection Moulding Engineering | Moultool',
    url: 'https://moultoolsystems.com/products/',
    accentColor: '#FFD400'
  },

  // 2. OPPL PACKAGING (3 Mockups)
  {
    screenImage: path.join(TEMP_DIR, 'oppl_1.png'),
    filename: 'OPPL Sustainable Packaging Platform Desktop Showcase.png',
    title: 'OPPL | Sustainable Corrugated & Mono Cartons',
    url: 'https://rndtd.com/demos/oppl/',
    accentColor: '#00D4FF'
  },
  {
    screenImage: path.join(TEMP_DIR, 'oppl_2.png'),
    filename: 'OPPL Mono Cartons and Corrugated Product Catalog.png',
    title: 'Manufacturing Heritage & Packaging Plant | OPPL',
    url: 'https://rndtd.com/demos/oppl/our-story/',
    accentColor: '#00D4FF'
  },
  {
    screenImage: path.join(TEMP_DIR, 'oppl_3.png'),
    filename: 'OPPL Responsive Mobile Packaging Suite.png',
    title: 'Corrugated Packaging Product Catalog | OPPL',
    url: 'https://rndtd.com/demos/oppl/products/',
    accentColor: '#00D4FF'
  },

  // 3. HYGINELAB (3 Mockups)
  {
    screenImage: path.join(TEMP_DIR, 'hyginelab_1.png'),
    filename: 'HygineLab Commercial Chemical Solutions Desktop Showcase.png',
    title: 'HygineLab | Commercial Hygiene Chemicals & Facility Care',
    url: 'https://www.hyginelab.com/',
    accentColor: '#00E599'
  },
  {
    screenImage: path.join(TEMP_DIR, 'hyginelab_2.png'),
    filename: 'HygineLab Industrial Machinery and Disinfection Portal.png',
    title: 'Floor Scrubbers & Cleaning Machinery | HygineLab',
    url: 'https://www.hyginelab.com/services/',
    accentColor: '#00E599'
  },
  {
    screenImage: path.join(TEMP_DIR, 'hyginelab_3.png'),
    filename: 'HygineLab Mobile Facility Hygiene Platform.png',
    title: 'Commercial Sanitation Solutions & Portal | HygineLab',
    url: 'https://www.hyginelab.com/',
    accentColor: '#00E599'
  },

  // 4. JYOTI UMBRELLA (3 Mockups)
  {
    screenImage: path.join(TEMP_DIR, 'jyoti_1.png'),
    filename: 'Jyoti Umbrella 3D Kinetic Storm Defense Desktop Showcase.png',
    title: 'Jyoti Umbrella | 3D Kinetic Storm Defense',
    url: 'https://jyoti-umbrella-taupe.vercel.app/',
    accentColor: '#FF6B35'
  },
  {
    screenImage: path.join(TEMP_DIR, 'jyoti_2.png'),
    filename: 'Jyoti Umbrella Performance Models and Carbon Ribs.png',
    title: 'Triple Storm Canopy & Carbon Rib Engineering | Jyoti',
    url: 'https://jyoti-umbrella-taupe.vercel.app/#products',
    accentColor: '#FF6B35'
  },
  {
    screenImage: path.join(TEMP_DIR, 'jyoti_3.png'),
    filename: 'Jyoti Umbrella Mobile E-Commerce Storefront.png',
    title: 'Corporate Rainwear Solutions & Storefront | Jyoti',
    url: 'https://jyoti-umbrella-taupe.vercel.app/#corporate',
    accentColor: '#FF6B35'
  },

  // 5. TAGA (3 Mockups)
  {
    screenImage: path.join(TEMP_DIR, 'taga_1.png'),
    filename: 'TAGA Luxury Aluminium Architectural Desktop Showcase.png',
    title: 'TAGA | Luxury Minimalist Aluminium Doors & Facades',
    url: 'https://www.taga.co.in/',
    accentColor: '#D4AF37'
  },
  {
    screenImage: path.join(TEMP_DIR, 'taga_2.png'),
    filename: 'TAGA Motorized Guillotine and Acoustic Systems.png',
    title: 'Minimalist Sliding & Guillotine Gallery | TAGA',
    url: 'https://www.taga.co.in/gallery/',
    accentColor: '#D4AF37'
  },
  {
    screenImage: path.join(TEMP_DIR, 'taga_3.png'),
    filename: 'TAGA Mobile Luxury Architectural Atelier.png',
    title: 'Thermal Break & Facade Engineering | TAGA',
    url: 'https://www.taga.co.in/about/',
    accentColor: '#D4AF37'
  },

  // 6. OSTECH AUTOMATION (2 Mockups)
  {
    screenImage: path.join(TEMP_DIR, 'ostech_1.png'),
    filename: 'OSTech Laptop in Orbital Showcase.png',
    title: 'OSTech Industrial Automation | Packaging Engineering',
    url: 'https://rndtechnosoft.com/portfolio/ostech-automation',
    accentColor: '#FF9900'
  },
  {
    screenImage: path.join(TEMP_DIR, 'ostech_2.png'),
    filename: 'OSTech Industrial Automation.png',
    title: 'Conveyor Matrices & Dynamic Packaging Machinery | OSTech',
    url: 'https://rndtechnosoft.com/portfolio/ostech-automation',
    accentColor: '#FF9900'
  }
];

async function run() {
  console.log('=== STARTING REALISTIC DESK MOCKUP GENERATION ===');
  for (const item of mockupList) {
    const outPort = path.join(PORT_DIR, item.filename);
    const outUpload = path.join(UPLOAD_DIR, item.filename);

    await createDeskMockup({
      screenImage: item.screenImage,
      outputFile: outPort,
      title: item.title,
      url: item.url,
      accentColor: item.accentColor
    });

    // Mirror to uploads directory
    fs.copyFileSync(outPort, outUpload);
  }
  console.log('=== ALL MOCKUPS GENERATED AND MIRRORED SUCCESSFULLY ===');
}

run().catch(err => {
  console.error('Desk mockup generation error:', err);
  process.exit(1);
});
