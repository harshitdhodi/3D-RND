const sharp = require('d:/Harshit/RND/3D-RND/node_modules/sharp');
const fs = require('fs');
const path = require('path');

const CANVAS_W = 1672;
const CANVAS_H = 941;

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Function to generate SVG for desktop browser frame
function createDesktopFrameSvg(w, h, titleText, urlText, accentColor = '#FFD400') {
  const titleBarH = 44;
  const safeTitle = escapeXml(titleText.toUpperCase());
  const safeUrl = escapeXml(urlText);
  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#141824" />
        <stop offset="100%" stop-color="#0E111A" />
      </linearGradient>
      <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.5" />
        <stop offset="50%" stop-color="#ffffff" stop-opacity="0.12" />
        <stop offset="100%" stop-color="${accentColor}" stop-opacity="0.1" />
      </linearGradient>
    </defs>

    <!-- Outer Window Border & Header -->
    <rect x="0" y="0" width="${w}" height="${titleBarH}" rx="14" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="1.5" />
    
    <!-- Window Control Dots -->
    <circle cx="24" cy="22" r="6" fill="#FF5F56" />
    <circle cx="44" cy="22" r="6" fill="#FFBD2E" />
    <circle cx="64" cy="22" r="6" fill="#27C93F" />

    <!-- Centered URL Bar Pill -->
    <rect x="${w / 2 - 200}" y="10" width="400" height="24" rx="12" fill="#090B10" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    <text x="${w / 2}" y="26" fill="#8E9AA8" font-family="monospace, sans-serif" font-size="11" text-anchor="middle" font-weight="500">${safeUrl}</text>

    <!-- Project Title Badge -->
    <text x="${w - 20}" y="27" fill="${accentColor}" font-family="monospace, sans-serif" font-size="10" text-anchor="end" letter-spacing="1.5" font-weight="600">${safeTitle}</text>
  </svg>
  `;
}

// Function to generate the cosmic backdrop
function createBackdropSvg(w, h, brandTitle, brandCategory, accentColor = '#FFD400') {
  const safeTitle = escapeXml(brandTitle);
  const safeCat = escapeXml(brandCategory);
  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="radialGlow" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.16" />
        <stop offset="45%" stop-color="${accentColor}" stop-opacity="0.03" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#080B12" />
        <stop offset="50%" stop-color="#040509" />
        <stop offset="100%" stop-color="#020305" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.025)" stroke-width="1" />
      </pattern>
    </defs>

    <!-- Base Canvas -->
    <rect width="${w}" height="${h}" fill="url(#bgGrad)" />
    <rect width="${w}" height="${h}" fill="url(#grid)" />
    <rect width="${w}" height="${h}" fill="url(#radialGlow)" />

    <!-- Top Left Category Pill -->
    <rect x="48" y="38" width="260" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
    <circle cx="62" cy="52" r="3.5" fill="${accentColor}" />
    <text x="74" y="56" fill="${accentColor}" font-family="monospace, sans-serif" font-size="10.5" letter-spacing="2" font-weight="600">RND TECH // CASE STUDY</text>

    <!-- Bottom Left Project Info -->
    <text x="48" y="${h - 48}" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="700" letter-spacing="0.5">${safeTitle}</text>
    <text x="48" y="${h - 26}" fill="#7E8B9B" font-family="monospace, sans-serif" font-size="11.5" letter-spacing="1">${safeCat}</text>

    <!-- Bottom Right Telemetry -->
    <text x="${w - 48}" y="${h - 38}" fill="${accentColor}" font-family="monospace, sans-serif" font-size="11" text-anchor="end" letter-spacing="1.5">PRODUCTION VERIFIED</text>
  </svg>
  `;
}

// Function to generate phone frame
function createPhoneFrameSvg(w, h, urlText, accentColor = '#FFD400') {
  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="phoneBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4A5164" />
        <stop offset="50%" stop-color="#1E232E" />
        <stop offset="100%" stop-color="${accentColor}" stop-opacity="0.6" />
      </linearGradient>
    </defs>
    <!-- Phone Bezel -->
    <rect x="0" y="0" width="${w}" height="${h}" rx="38" fill="#0A0C12" stroke="url(#phoneBorder)" stroke-width="4" />
    <!-- Dynamic Island / Speaker Pill -->
    <rect x="${w / 2 - 45}" y="12" width="90" height="20" rx="10" fill="#000000" />
    <circle cx="${w / 2 + 25}" cy="22" r="4.5" fill="#1A1D24" />
  </svg>
  `;
}

async function buildDesktopMockup(screenPath, outPath, brandTitle, brandCategory, domain, accentColor) {
  const frameW = 1420;
  const frameH = 780;
  const titleBarH = 44;
  const viewW = frameW - 4;
  const viewH = frameH - titleBarH - 2;

  // 1. Resize screenshot to fit viewport
  const screenBuffer = await sharp(screenPath)
    .resize(viewW, viewH, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();

  // 2. Generate frame SVG
  const frameSvg = Buffer.from(createDesktopFrameSvg(frameW, frameH, brandTitle, domain, accentColor));
  const frameHeader = await sharp(frameSvg).png().toBuffer();

  // 3. Composite window (header + screen)
  const windowComposite = await sharp({
    create: {
      width: frameW,
      height: frameH,
      channels: 4,
      background: { r: 10, g: 12, b: 18, alpha: 1 }
    }
  })
    .composite([
      { input: frameHeader, top: 0, left: 0 },
      { input: screenBuffer, top: titleBarH, left: 2 }
    ])
    .png()
    .toBuffer();

  // 4. Generate backdrop
  const backdropSvg = Buffer.from(createBackdropSvg(CANVAS_W, CANVAS_H, brandTitle, brandCategory, accentColor));
  const backdrop = await sharp(backdropSvg).png().toBuffer();

  // 5. Place window on backdrop centered
  const posX = Math.round((CANVAS_W - frameW) / 2);
  const posY = Math.round((CANVAS_H - frameH) / 2) - 10;

  await sharp(backdrop)
    .composite([
      { input: windowComposite, top: posY, left: posX }
    ])
    .png()
    .toFile(outPath);

  console.log(`✓ Generated Desktop Mockup: ${path.basename(outPath)}`);
}

async function buildResponsiveMockup(desktopScreenPath, mobileScreenPath, outPath, brandTitle, brandCategory, domain, accentColor) {
  // Desktop in background slightly shifted left, Phone in foreground on right
  const deskW = 1120;
  const deskH = 690;
  const titleBarH = 38;
  const deskViewW = deskW - 4;
  const deskViewH = deskH - titleBarH - 2;

  const deskScreen = await sharp(desktopScreenPath)
    .resize(deskViewW, deskViewH, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();

  const deskFrameSvg = Buffer.from(createDesktopFrameSvg(deskW, deskH, brandTitle, domain, accentColor));
  const deskFrameHeader = await sharp(deskFrameSvg).png().toBuffer();

  const deskComposite = await sharp({
    create: {
      width: deskW,
      height: deskH,
      channels: 4,
      background: { r: 10, g: 12, b: 18, alpha: 1 }
    }
  })
    .composite([
      { input: deskFrameHeader, top: 0, left: 0 },
      { input: deskScreen, top: titleBarH, left: 2 }
    ])
    .png()
    .toBuffer();

  // Phone dimensions
  const phoneW = 340;
  const phoneH = 690;
  const phoneScreenW = 320;
  const phoneScreenH = 654;

  const mobileScreen = await sharp(mobileScreenPath)
    .resize(phoneScreenW, phoneScreenH, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();

  const phoneFrameSvg = Buffer.from(createPhoneFrameSvg(phoneW, phoneH, domain, accentColor));
  const phoneFrame = await sharp(phoneFrameSvg).png().toBuffer();

  const phoneComposite = await sharp({
    create: {
      width: phoneW,
      height: phoneH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: phoneFrame, top: 0, left: 0 },
      { input: mobileScreen, top: 22, left: 10 }
    ])
    .png()
    .toBuffer();

  // Backdrop
  const backdropSvg = Buffer.from(createBackdropSvg(CANVAS_W, CANVAS_H, brandTitle, brandCategory, accentColor));
  const backdrop = await sharp(backdropSvg).png().toBuffer();

  // Positioning
  const deskX = 80;
  const deskY = Math.round((CANVAS_H - deskH) / 2) - 10;

  const phoneX = CANVAS_W - phoneW - 90;
  const phoneY = Math.round((CANVAS_H - phoneH) / 2) + 10;

  await sharp(backdrop)
    .composite([
      { input: deskComposite, top: deskY, left: deskX },
      { input: phoneComposite, top: phoneY, left: phoneX }
    ])
    .png()
    .toFile(outPath);

  console.log(`✓ Generated Responsive Mockup: ${path.basename(outPath)}`);
}

module.exports = {
  buildDesktopMockup,
  buildResponsiveMockup,
  CANVAS_W,
  CANVAS_H
};
