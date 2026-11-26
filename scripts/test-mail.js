const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Simple .env parser
function loadEnv() {
  const envPath = path.resolve(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) {
    console.error('.env file not found at:', envPath);
    return {};
  }
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  const env = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

async function main() {
  console.log('🔄 Loading configuration from .env ...');
  const env = loadEnv();

  const host = env.EMAIL_HOST || env.SMTP_HOST || 'smtppro.zoho.in';
  const port = Number(env.EMAIL_PORT || env.SMTP_PORT || 465);
  const secure = env.EMAIL_SECURE === 'true' || port === 465;
  const user = env.EMAIL_USER || env.SMTP_USER || 'info@rndtechnosoft.com';
  const pass = env.EMAIL_PASS || env.SMTP_PASS || '';
  const fromName = env.EMAIL_FROM_NAME || 'RND TECHNOSOFT';
  const to = env.EMAIL_ADMIN || user;
  const cc = env.EMAIL_CC || env.SMTP_CC || 'ravi@rndtechnosoft.com';

  console.log('📋 SMTP Settings:');
  console.log('  Host:', host);
  console.log('  Port:', port);
  console.log('  Secure:', secure);
  console.log('  User:', user);
  console.log('  Password:', pass ? '******** (' + pass.length + ' chars)' : '(empty)');
  console.log('  To:', to);
  console.log('  CC:', cc);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  console.log('\n🔍 Verifying SMTP connection...');
  try {
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!');
  } catch (verifyErr) {
    console.error('❌ SMTP verification failed:', verifyErr.message);
    if (verifyErr.code) console.error('  Code:', verifyErr.code);
    if (verifyErr.response) console.error('  Response:', verifyErr.response);
    return;
  }

  console.log('\n📧 Sending test email to:', to);
  const timestamp = new Date().toLocaleString();
  const mailOptions = {
    from: `"${fromName}" <${user}>`,
    to,
    cc,
    subject: `[Test Mail] RND Technosoft Zoho SMTP Verification — ${timestamp}`,
    text: `Hello!\n\nThis is a test email sent from the RND Technosoft platform to verify that Zoho Mail SMTP configuration is working.\n\nSent at: ${timestamp}\nHost: ${host}:${port}\nUser: ${user}\n\nAll systems operational.`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #050608; color: #ffffff; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(255, 212, 0, 0.3);">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #FFD400; font-size: 24px; margin: 0; letter-spacing: 2px;">RND TECHNOSOFT</h1>
          <p style="color: #a3a3a3; font-size: 12px; margin-top: 4px; text-transform: uppercase; letter-spacing: 1.5px;">Zoho SMTP Verification Test</p>
        </div>
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #ffffff;">Hello,</p>
          <p style="margin: 0 0 15px 0; font-size: 14px; color: #cccccc; line-height: 1.6;">
            This is a test email sent from your website's contact form backend to confirm that the Zoho Mail SMTP integration is operating successfully.
          </p>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr>
              <td style="padding: 6px 0; color: #888;">Status:</td>
              <td style="padding: 6px 0; color: #22c55e; font-weight: bold;">● 100% OPERATIONAL</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #888;">SMTP Host:</td>
              <td style="padding: 6px 0; color: #ffffff; font-family: monospace;">${host}:${port}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #888;">Authenticated As:</td>
              <td style="padding: 6px 0; color: #ffffff; font-family: monospace;">${user}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #888;">Timestamp:</td>
              <td style="padding: 6px 0; color: #ffffff;">${timestamp}</td>
            </tr>
          </table>
        </div>
        <div style="text-align: center; font-size: 11px; color: #666; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
          RND Technosoft — 3rd Floor, Sapphire, Daman Rd, Vapi, Gujarat
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('🎉 Test email dispatched successfully!');
    console.log('  Message ID:', info.messageId);
    console.log('  Accepted:', info.accepted);
    console.log('  Response:', info.response);
  } catch (sendErr) {
    console.error('❌ Failed to send email:', sendErr.message);
    if (sendErr.code) console.error('  Code:', sendErr.code);
    if (sendErr.response) console.error('  Response:', sendErr.response);
  }
}

main().catch(console.error);

