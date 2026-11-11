#!/usr/bin/env node

/**
 * Hero Video to Frames Automation Pipeline (Frontend version)
 * 
 * Usage:
 *   node scripts/convert_hero_video.js <path-to-video> [--fps 24] [--width 1920] [--quality 2]
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

const args = process.argv.slice(2);
if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
=============================================================
  RND Hero Video to Frames Converter & MongoDB Auto-Sync
=============================================================
Usage:
  npm run hero:convert -- <video-file> [options]

Options:
  --fps <number>      Target frame rate (e.g. 24, 30). Defaults to video's native fps.
  --width <number>    Max frame width in px (default: 1920, keeps aspect ratio).
  --quality <number>  JPEG quality 1-5 (1=best, 2=high default, 5=compressed).
  --no-backup         Skip backing up existing frames.

Example:
  npm run hero:convert -- public/hero.mp4
=============================================================
`);
  process.exit(0);
}

const videoInputPath = path.resolve(process.cwd(), args[0]);

function getArgValue(flag, defaultValue) {
  const idx = args.indexOf(flag);
  if (idx !== -1 && args[idx + 1] && !args[idx + 1].startsWith('--')) {
    return args[idx + 1];
  }
  return defaultValue;
}

const targetFps = getArgValue('--fps', null);
const targetWidth = parseInt(getArgValue('--width', '1920'), 10);
const targetQuality = parseInt(getArgValue('--quality', '2'), 10);
const skipBackup = args.includes('--no-backup');

async function main() {
  console.log('\n🚀 Starting Hero Video to Frames Conversion Pipeline...\n');

  if (!fs.existsSync(videoInputPath)) {
    console.error(`❌ Error: Input video file not found at: ${videoInputPath}`);
    process.exit(1);
  }
  const stat = fs.statSync(videoInputPath);
  console.log(`📹 Video file found: ${videoInputPath} (${(stat.size / (1024 * 1024)).toFixed(2)} MB)`);

  try {
    const ffmpegVer = execSync('ffmpeg -version', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    console.log(`✅ FFmpeg detected: ${ffmpegVer.split('\n')[0]}`);
  } catch (err) {
    console.error('❌ Error: ffmpeg is not installed or not in PATH.');
    process.exit(1);
  }

  const outputDir = path.resolve(process.cwd(), 'public/hero-frames');
  console.log(`📂 Output directory: ${outputDir}`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const existingFiles = fs.readdirSync(outputDir).filter(f => /^frame_\d{4}\.jpg$/i.test(f));
  if (existingFiles.length > 0 && !skipBackup) {
    const backupDir = path.resolve(path.dirname(outputDir), `hero-frames-backup-${Date.now()}`);
    console.log(`📦 Backing up ${existingFiles.length} existing frames to: ${backupDir}`);
    fs.mkdirSync(backupDir, { recursive: true });
    for (const file of existingFiles) {
      fs.copyFileSync(path.join(outputDir, file), path.join(backupDir, file));
    }
  }

  for (const file of existingFiles) {
    try { fs.unlinkSync(path.join(outputDir, file)); } catch {}
  }

  const vfFilters = [];
  if (targetFps) vfFilters.push(`fps=${targetFps}`);
  vfFilters.push(`scale=${targetWidth}:-1`);
  const vfParam = vfFilters.join(',');

  const framePattern = path.join(outputDir, 'frame_%04d.jpg');

  console.log(`⚙️  Extracting frames at quality q:v ${targetQuality}...`);
  const ffmpegArgs = [
    '-y',
    '-i', videoInputPath,
    '-vf', vfParam,
    '-q:v', String(targetQuality),
    framePattern
  ];

  const startTime = Date.now();
  const result = spawnSync('ffmpeg', ffmpegArgs, { stdio: 'inherit' });

  if (result.error || result.status !== 0) {
    console.error(`❌ FFmpeg failed with exit code ${result.status}`, result.error);
    process.exit(1);
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`✨ Extraction complete in ${durationSec}s!`);

  const generatedFrames = fs.readdirSync(outputDir).filter(f => /^frame_\d{4}\.jpg$/i.test(f));
  const totalFrames = generatedFrames.length;

  console.log(`🎉 Total frames extracted: ${totalFrames} frames`);

  // Optional: Update MongoDB if mongodb is available in backend
  const backendEnv = path.resolve(__dirname, '../../backend/.env');
  let mongoUri = null;
  if (fs.existsSync(backendEnv)) {
    const envContent = fs.readFileSync(backendEnv, 'utf8');
    const match = envContent.match(/MONGODB_URI=["']?([^"'\r\n]+)["']?/);
    if (match) mongoUri = match[1];
  }

  if (mongoUri) {
    try {
      const mongodbModule = require(path.resolve(__dirname, '../../backend/node_modules/mongodb'));
      const { MongoClient } = mongodbModule;
      const client = new MongoClient(mongoUri);
      await client.connect();
      const db = client.db('3d-RND');
      await db.collection('hero_section').updateOne(
        {},
        {
          $set: {
            total_frames: totalFrames,
            frame_path_prefix: '/hero-frames/frame_',
            updated_at: new Date().toISOString()
          }
        }
      );
      await client.close();
      console.log(`✅ MongoDB updated automatically! total_frames: ${totalFrames}`);
    } catch (e) {
      console.warn(`⚠️  Could not auto-update MongoDB: ${e.message}`);
    }
  }

  console.log(`\nAll done! Hero Section will now scrub through all ${totalFrames} frames.\n`);
}

main().catch(console.error);

