const fs = require('fs');
const path = require('path');
const { buildDesktopMockup, buildResponsiveMockup } = require('./mockup_generator');

const portDir = path.resolve('3D-RND', 'public', 'protfolio image');
const uploadDir = path.resolve('3D-RND', 'public', 'uploads');
const tempDir = path.resolve('3D-RND', 'public', 'temp_screens');

if (!fs.existsSync(portDir)) fs.mkdirSync(portDir, { recursive: true });
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const projects = [
  {
    name: 'Moultool Systems',
    domain: 'moultoolsystems.com',
    category: 'INDUSTRIAL TOOLING // DIE & MOULD PLATFORM',
    accentColor: '#FFD400',
    mockups: [
      {
        type: 'desktop',
        screen: 'moultool_1.png',
        filename: 'Moultool Systems Precision Engineering Desktop Showcase.png',
        title: 'Moultool Systems Precision Engineering'
      },
      {
        type: 'desktop',
        screen: 'moultool_2.png',
        filename: 'Moultool Systems Tooling Capabilities and Machine Fleet.png',
        title: 'Moultool Capabilities & CNC Machine Fleet'
      },
      {
        type: 'responsive',
        deskScreen: 'moultool_1.png',
        mobScreen: 'moultool_3.png',
        filename: 'Moultool Systems Responsive Mobile Engineering Portal.png',
        title: 'Moultool Responsive Engineering Platform'
      }
    ]
  },
  {
    name: 'OPPL Packaging',
    domain: 'rndtd.com/demos/oppl',
    category: 'SUSTAINABLE PACKAGING // CORRUGATED & MONO CARTONS',
    accentColor: '#00D4FF',
    mockups: [
      {
        type: 'desktop',
        screen: 'oppl_1.png',
        filename: 'OPPL Sustainable Packaging Platform Desktop Showcase.png',
        title: 'OPPL Sustainable Packaging Flagship'
      },
      {
        type: 'desktop',
        screen: 'oppl_2.png',
        filename: 'OPPL Mono Cartons and Corrugated Product Catalog.png',
        title: 'OPPL Cartons & Industrial Packaging Catalog'
      },
      {
        type: 'responsive',
        deskScreen: 'oppl_1.png',
        mobScreen: 'oppl_3.png',
        filename: 'OPPL Responsive Mobile Packaging Suite.png',
        title: 'OPPL Multi-Device Packaging Suite'
      }
    ]
  },
  {
    name: 'HygineLab',
    domain: 'hyginelab.com',
    category: 'COMMERCIAL CLEANING // CHEMICALS & FACILITY SERVICES',
    accentColor: '#00E599',
    mockups: [
      {
        type: 'desktop',
        screen: 'hyginelab_1.png',
        filename: 'HygineLab Commercial Chemical Solutions Desktop Showcase.png',
        title: 'HygineLab Commercial Chemical Solutions'
      },
      {
        type: 'desktop',
        screen: 'hyginelab_2.png',
        filename: 'HygineLab Industrial Machinery and Disinfection Portal.png',
        title: 'HygineLab Floor Scrubbers & Janitorial Tools'
      },
      {
        type: 'responsive',
        deskScreen: 'hyginelab_1.png',
        mobScreen: 'hyginelab_3.png',
        filename: 'HygineLab Mobile Facility Hygiene Platform.png',
        title: 'HygineLab Responsive Sanitation Platform'
      }
    ]
  },
  {
    name: 'Jyoti Umbrella',
    domain: 'jyoti-umbrella-taupe.vercel.app',
    category: 'AERODYNAMIC RAINWEAR // 3D KINETIC STORM DEFENSE',
    accentColor: '#FF6B35',
    mockups: [
      {
        type: 'desktop',
        screen: 'jyoti_1.png',
        filename: 'Jyoti Umbrella 3D Kinetic Storm Defense Desktop Showcase.png',
        title: 'Jyoti Umbrella 3D Kinetic Storm Defense'
      },
      {
        type: 'desktop',
        screen: 'jyoti_2.png',
        filename: 'Jyoti Umbrella Performance Models and Carbon Ribs.png',
        title: 'Jyoti Umbrella Models & Nano-Weave Catalog'
      },
      {
        type: 'responsive',
        deskScreen: 'jyoti_1.png',
        mobScreen: 'jyoti_3.png',
        filename: 'Jyoti Umbrella Mobile E-Commerce Storefront.png',
        title: 'Jyoti Umbrella Mobile E-Commerce Experience'
      }
    ]
  },
  {
    name: 'TAGA',
    domain: 'taga.co.in',
    category: 'LUXURY ARCHITECTURAL // MINIMALIST DOORS & WINDOWS',
    accentColor: '#D4AF37',
    mockups: [
      {
        type: 'desktop',
        screen: 'taga_1.png',
        filename: 'TAGA Luxury Aluminium Architectural Desktop Showcase.png',
        title: 'TAGA Luxury Aluminium Architectural Systems'
      },
      {
        type: 'desktop',
        screen: 'taga_2.png',
        filename: 'TAGA Motorized Guillotine and Acoustic Systems.png',
        title: 'TAGA Sliding Systems & Acoustic Facades'
      },
      {
        type: 'responsive',
        deskScreen: 'taga_1.png',
        mobScreen: 'taga_3.png',
        filename: 'TAGA Mobile Luxury Architectural Atelier.png',
        title: 'TAGA Responsive Luxury Atelier Portal'
      }
    ]
  }
];

async function generateAll() {
  console.log('--- GENERATING ALL 15 MOCKUPS ---');
  for (const proj of projects) {
    console.log(`\nProcessing ${proj.name}...`);
    for (const m of proj.mockups) {
      const outPort = path.join(portDir, m.filename);
      const outUpload = path.join(uploadDir, m.filename);

      if (m.type === 'desktop') {
        const screenPath = path.join(tempDir, m.screen);
        await buildDesktopMockup(screenPath, outPort, m.title, proj.category, proj.domain, proj.accentColor);
      } else {
        const deskPath = path.join(tempDir, m.deskScreen);
        const mobPath = path.join(tempDir, m.mobScreen);
        await buildResponsiveMockup(deskPath, mobPath, outPort, m.title, proj.category, proj.domain, proj.accentColor);
      }

      // Mirror to uploads
      fs.copyFileSync(outPort, outUpload);
    }
  }
  console.log('\n✓ ALL 15 MOCKUPS GENERATED AND MIRRORED SUCCESSFULLY!');
}

generateAll().catch(err => {
  console.error('Mockup generation failed:', err);
  process.exit(1);
});
