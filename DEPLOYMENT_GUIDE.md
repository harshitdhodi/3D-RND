# VPS Deployment Guide - 3D RND Next.js Application

## Prerequisites

### On Your VPS:
- Node.js (v18.17 or later)
- npm or yarn
- PM2 (Process Manager)
- Nginx (for reverse proxy)
- Git

---

## Step 1: VPS Setup

### 1.1 Connect to Your VPS
```bash
ssh root@YOUR_VPS_IP
```

### 1.2 Update System
```bash
apt update && apt upgrade -y
```

### 1.3 Install Node.js (via nvm)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell
source ~/.bashrc

# Install Node.js LTS
nvm install 18
nvm use 18
nvm alias default 18

# Verify installation
node -v
npm -v
```

### 1.4 Install PM2
```bash
npm install -g pm2
```

### 1.5 Install Nginx
```bash
apt install nginx -y
systemctl start nginx
systemctl enable nginx
```

---

## Step 2: Create Project Directory

```bash
# Create directory
mkdir -p /var/www/rndprojects

# Create logs directory
mkdir -p /var/www/rndprojects/logs

# Set permissions
chown -R $USER:$USER /var/www/rndprojects
chmod -R 755 /var/www/rndprojects
```

---

## Step 3: Clone Repository

```bash
cd /var/www
git clone https://github.com/harshitdhodi/3D-RND.git rndprojects
cd rndprojects
```

---

## Step 4: Install Dependencies

```bash
npm install
# or
yarn install
```

---

## Step 5: Environment Variables

Create `.env.local` file:

```bash
nano /var/www/rndprojects/.env.local
```

Add your environment variables:
```env
# Production Environment Variables
NODE_ENV=production

# API Keys (if any)
# NEXT_PUBLIC_API_URL=https://api.yourdomain.com
# NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Add any other environment variables your app needs
```

Save and exit (Ctrl+X, Y, Enter)

---

## Step 6: Build the Application

```bash
npm run build
# or
yarn build
```

---

## Step 7: Start with PM2

### 7.1 Using Ecosystem File
```bash
pm2 start ecosystem.config.js --env production
```

### 7.2 Save PM2 Configuration
```bash
pm2 save
```

### 7.3 Enable PM2 Startup
```bash
pm2 startup systemd
# Copy and run the command that PM2 outputs
```

### 7.4 Verify Application is Running
```bash
pm2 status
pm2 logs rnd-3d-website
```

---

## Step 8: Configure Nginx

### 8.1 Create Nginx Configuration
```bash
nano /etc/nginx/sites-available/rndprojects
```

Add the following configuration:
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;

    # Logs
    access_log /var/log/nginx/rndprojects-access.log;
    error_log /var/log/nginx/rndprojects-error.log;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

    # Client max body size
    client_max_body_size 20M;

    # Proxy settings
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Public files
    location /public {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

### 8.2 Enable the Configuration
```bash
ln -s /etc/nginx/sites-available/rndprojects /etc/nginx/sites-enabled/
```

### 8.3 Test Nginx Configuration
```bash
nginx -t
```

### 8.4 Restart Nginx
```bash
systemctl restart nginx
```

---

## Step 9: SSL Certificate (Let's Encrypt)

### 9.1 Install Certbot
```bash
apt install certbot python3-certbot-nginx -y
```

### 9.2 Obtain SSL Certificate
```bash
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 9.3 Auto-renewal Test
```bash
certbot renew --dry-run
```

---

## Step 10: Firewall Configuration

```bash
# Allow SSH
ufw allow 22

# Allow HTTP
ufw allow 80

# Allow HTTPS
ufw allow 443

# Enable firewall
ufw enable

# Check status
ufw status
```

---

## PM2 Commands Reference

### Basic Commands
```bash
# Start application
pm2 start ecosystem.config.js --env production

# Stop application
pm2 stop rnd-3d-website

# Restart application
pm2 restart rnd-3d-website

# Reload application (zero-downtime)
pm2 reload rnd-3d-website

# Delete from PM2
pm2 delete rnd-3d-website

# View logs
pm2 logs rnd-3d-website

# Monitor
pm2 monit

# Status
pm2 status

# Save current PM2 configuration
pm2 save

# List all applications
pm2 list
```

### Advanced Commands
```bash
# Show detailed info
pm2 show rnd-3d-website

# Clear logs
pm2 flush

# Reset restart counter
pm2 reset rnd-3d-website

# Update PM2
pm2 update
```

---

## Deployment Workflow

### Initial Deployment
```bash
cd /var/www/rndprojects
git pull origin main
npm install
npm run build
pm2 restart rnd-3d-website
```

### Using PM2 Deploy (Automated)
```bash
# Setup (first time only)
pm2 deploy production setup

# Deploy
pm2 deploy production
```

---

## Update/Redeploy Script

Create a deployment script:

```bash
nano /var/www/rndprojects/deploy.sh
```

Add:
```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /var/www/rndprojects

# Pull latest changes
echo "📥 Pulling latest changes from Git..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build application
echo "🔨 Building application..."
npm run build

# Reload PM2
echo "♻️  Reloading application with PM2..."
pm2 reload ecosystem.config.js --env production

# Show status
pm2 status

echo "✅ Deployment completed!"
```

Make executable:
```bash
chmod +x /var/www/rndprojects/deploy.sh
```

Run deployment:
```bash
./deploy.sh
```

---

## Monitoring

### 1. PM2 Monitoring
```bash
pm2 monit
```

### 2. Check Logs
```bash
# Application logs
pm2 logs rnd-3d-website --lines 100

# Nginx logs
tail -f /var/log/nginx/rndprojects-access.log
tail -f /var/log/nginx/rndprojects-error.log
```

### 3. Check System Resources
```bash
# Memory
free -h

# Disk space
df -h

# CPU usage
top

# PM2 status
pm2 status
```

---

## Troubleshooting

### Application Won't Start
```bash
# Check logs
pm2 logs rnd-3d-website

# Check if port is in use
lsof -i :3000

# Rebuild
npm run build
pm2 restart rnd-3d-website
```

### Nginx Issues
```bash
# Test configuration
nginx -t

# Check status
systemctl status nginx

# Restart nginx
systemctl restart nginx

# Check logs
tail -f /var/log/nginx/error.log
```

### Out of Memory
```bash
# Increase memory limit in ecosystem.config.js
max_memory_restart: '2G'

# Restart PM2
pm2 restart rnd-3d-website
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Restart application
pm2 restart rnd-3d-website
```

---

## Performance Optimization

### 1. Enable PM2 Cluster Mode
Already configured in ecosystem.config.js:
```javascript
instances: 'max',
exec_mode: 'cluster'
```

### 2. Setup Nginx Caching
Add to nginx config:
```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 60m;
    proxy_cache_bypass $http_cache_control;
    add_header X-Cache-Status $upstream_cache_status;
    # ... rest of proxy settings
}
```

### 3. Enable HTTP/2
In nginx config (after SSL setup):
```nginx
listen 443 ssl http2;
listen [::]:443 ssl http2;
```

---

## Backup Strategy

### 1. Database Backup (if applicable)
```bash
# Create backup script
nano /var/www/rndprojects/backup.sh
```

### 2. Code Backup
```bash
# Already handled by Git
# Ensure commits are pushed regularly
```

### 3. Environment Variables Backup
```bash
# Backup .env.local securely
cp /var/www/rndprojects/.env.local ~/backups/env.local.backup
```

---

## Security Checklist

- [x] Firewall configured (UFW)
- [x] SSL certificate installed
- [x] Nginx security headers
- [x] Environment variables protected
- [x] Regular updates scheduled
- [x] SSH key authentication (recommended)
- [x] Disable root login (recommended)
- [x] Install fail2ban (recommended)

---

## Important Notes

1. **Replace Placeholders:**
   - `YOUR_VPS_IP` → Your actual VPS IP address
   - `yourdomain.com` → Your actual domain name
   - Update any API keys or environment variables

2. **Port Configuration:**
   - Application runs on port 3000
   - Nginx proxies port 80/443 to 3000
   - Ensure port 3000 is not exposed externally

3. **Memory Management:**
   - Current limit: 1GB per instance
   - Adjust based on your VPS resources
   - Monitor with `pm2 monit`

4. **Logs Location:**
   - PM2 logs: `/var/www/rndprojects/logs/`
   - Nginx logs: `/var/log/nginx/`

5. **Auto-restart:**
   - PM2 automatically restarts on crashes
   - Max 10 restarts per minute
   - Configured in ecosystem.config.js

---

## Quick Reference

### Deployment Commands
```bash
# Quick deploy
cd /var/www/rndprojects && git pull && npm install && npm run build && pm2 reload rnd-3d-website

# Or use the script
./deploy.sh
```

### Status Check
```bash
# Application
pm2 status

# Nginx
systemctl status nginx

# SSL
certbot certificates

# System
df -h && free -h
```

---

## Support & Resources

- **PM2 Documentation:** https://pm2.keymetrics.io/docs/
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Nginx Documentation:** https://nginx.org/en/docs/
- **Let's Encrypt:** https://letsencrypt.org/docs/

---

**Your application should now be live and running on your VPS!** 🚀
