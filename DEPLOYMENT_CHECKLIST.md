# VPS Deployment Checklist - 3D RND Website

## ✅ Pre-Deployment Status

### Files Ready
- [x] `ecosystem.config.js` - PM2 configuration committed
- [x] `deploy.sh` - Automated deployment script committed
- [x] `DEPLOYMENT_GUIDE.md` - Complete deployment guide committed
- [x] All code changes committed and pushed to GitHub

### Repository Information
- **GitHub Repository**: `https://github.com/harshitdhodi/3D-RND.git`
- **Branch**: `main`
- **Last Commit**: `1620d83` (add deployment files)

---

## 📋 Deployment Steps Checklist

### Phase 1: VPS Initial Setup
- [ ] Connect to VPS via SSH: `ssh root@YOUR_VPS_IP`
- [ ] Update system: `apt update && apt upgrade -y`
- [ ] Install Node.js via nvm (v18+)
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
  source ~/.bashrc
  nvm install 18
  nvm use 18
  ```
- [ ] Verify Node.js: `node -v` (should show v18.x.x)
- [ ] Install PM2: `npm install -g pm2`
- [ ] Install Nginx: `apt install nginx -y`
- [ ] Install Git: `apt install git -y`

### Phase 2: Project Setup
- [ ] Create project directory: `mkdir -p /var/www/rndprojects`
- [ ] Create logs directory: `mkdir -p /var/www/rndprojects/logs`
- [ ] Set permissions: `chown -R $USER:$USER /var/www/rndprojects`
- [ ] Clone repository:
  ```bash
  cd /var/www
  git clone https://github.com/harshitdhodi/3D-RND.git rndprojects
  cd rndprojects
  ```
- [ ] Verify files: `ls -la` (check ecosystem.config.js exists)

### Phase 3: Environment Configuration
- [ ] Create `.env.local` file: `nano /var/www/rndprojects/.env.local`
- [ ] Add required environment variables:
  ```env
  NODE_ENV=production
  # Add any other required variables
  ```
- [ ] Save and verify: `cat /var/www/rndprojects/.env.local`

### Phase 4: Build and Start Application
- [ ] Install dependencies: `npm install` (or `npm ci` for production)
- [ ] Build application: `npm run build`
- [ ] Verify build: `ls -la .next` (check build directory exists)
- [ ] Start with PM2: `pm2 start ecosystem.config.js --env production`
- [ ] Save PM2 config: `pm2 save`
- [ ] Enable PM2 startup: `pm2 startup systemd` (run generated command)
- [ ] Check status: `pm2 status`
- [ ] Check logs: `pm2 logs rnd-3d-website --lines 50`

### Phase 5: Nginx Configuration
- [ ] Update placeholders in ecosystem.config.js if needed
- [ ] Create Nginx config: `nano /etc/nginx/sites-available/rndprojects`
- [ ] Add configuration (see DEPLOYMENT_GUIDE.md for full config)
- [ ] **IMPORTANT**: Update these in Nginx config:
  - Replace `yourdomain.com` with your actual domain
  - Replace `www.yourdomain.com` with your actual subdomain
  - Verify proxy_pass port matches ecosystem.config.js PORT (4037)
- [ ] Enable site: `ln -s /etc/nginx/sites-available/rndprojects /etc/nginx/sites-enabled/`
- [ ] Test Nginx: `nginx -t`
- [ ] Restart Nginx: `systemctl restart nginx`
- [ ] Check Nginx status: `systemctl status nginx`

### Phase 6: DNS Configuration
- [ ] Add A record pointing to VPS IP address
- [ ] Add www subdomain CNAME or A record
- [ ] Wait for DNS propagation (can take up to 48 hours)
- [ ] Test DNS: `nslookup yourdomain.com`

### Phase 7: SSL Certificate
- [ ] Install Certbot: `apt install certbot python3-certbot-nginx -y`
- [ ] Obtain SSL certificate:
  ```bash
  certbot --nginx -d yourdomain.com -d www.yourdomain.com
  ```
- [ ] Test auto-renewal: `certbot renew --dry-run`
- [ ] Verify HTTPS works: Visit `https://yourdomain.com`

### Phase 8: Firewall Configuration
- [ ] Allow SSH: `ufw allow 22`
- [ ] Allow HTTP: `ufw allow 80`
- [ ] Allow HTTPS: `ufw allow 443`
- [ ] Enable firewall: `ufw enable`
- [ ] Check status: `ufw status`

### Phase 9: Verification
- [ ] Test HTTP access: `curl http://localhost:4037`
- [ ] Test public HTTP access: `curl http://YOUR_VPS_IP`
- [ ] Test domain: Visit `http://yourdomain.com`
- [ ] Test HTTPS: Visit `https://yourdomain.com`
- [ ] Test all pages: Home, About, Portfolio, Services, etc.
- [ ] Check PM2 logs: `pm2 logs rnd-3d-website`
- [ ] Check Nginx access logs: `tail -f /var/log/nginx/rndprojects-access.log`
- [ ] Check Nginx error logs: `tail -f /var/log/nginx/rndprojects-error.log`

---

## 🔧 Configuration Values to Update

### In ecosystem.config.js (if needed)
```javascript
env: {
  NODE_ENV: 'production',
  PORT: 4037,  // Confirm this matches your Nginx config
}
```

### In Nginx Configuration
```nginx
server_name yourdomain.com www.yourdomain.com;  // Replace with actual domain
proxy_pass http://localhost:4037;               // Must match PORT in ecosystem.config.js
```

### In .env.local
```env
NODE_ENV=production
# Add any API keys, database URLs, etc.
```

---

## 🚀 Deployment Script Usage

### Make deploy.sh executable
```bash
chmod +x /var/www/rndprojects/deploy.sh
```

### Run deployment
```bash
cd /var/www/rndprojects
./deploy.sh
```

The script will:
1. Pull latest changes from GitHub
2. Install dependencies (if package.json changed)
3. Build the application
4. Reload PM2 with zero downtime
5. Show application status and logs

---

## 📊 Monitoring Commands

### PM2 Monitoring
```bash
pm2 status                    # Check application status
pm2 logs rnd-3d-website       # View logs (Ctrl+C to exit)
pm2 monit                     # Real-time monitoring
pm2 restart rnd-3d-website    # Restart application
pm2 reload rnd-3d-website     # Zero-downtime reload
```

### System Monitoring
```bash
df -h                         # Disk space
free -h                       # Memory usage
top                           # CPU usage
htop                          # Better CPU monitoring (install: apt install htop)
```

### Nginx Monitoring
```bash
systemctl status nginx                              # Nginx status
tail -f /var/log/nginx/rndprojects-access.log      # Access logs
tail -f /var/log/nginx/rndprojects-error.log       # Error logs
```

---

## 🔄 Update Workflow

### For Code Changes:
1. Make changes locally
2. Commit and push to GitHub: `git push origin main`
3. On VPS, run: `./deploy.sh`

### Manual Update Steps:
```bash
cd /var/www/rndprojects
git pull origin main
npm install
npm run build
pm2 reload rnd-3d-website
```

---

## ⚠️ Troubleshooting

### Application won't start
```bash
# Check logs
pm2 logs rnd-3d-website

# Check if port is in use
lsof -i :4037

# Kill process if needed
kill -9 <PID>

# Restart
pm2 delete rnd-3d-website
pm2 start ecosystem.config.js --env production
```

### Nginx 502 Bad Gateway
```bash
# Check if application is running
pm2 status

# Check if port matches
cat ecosystem.config.js | grep PORT
cat /etc/nginx/sites-available/rndprojects | grep proxy_pass

# Restart both
pm2 restart rnd-3d-website
systemctl restart nginx
```

### Out of Memory
```bash
# Increase memory limit in ecosystem.config.js
max_memory_restart: '2G'

# Restart
pm2 restart rnd-3d-website
```

### SSL Certificate Issues
```bash
# Check certificate status
certbot certificates

# Renew certificate
certbot renew

# Test auto-renewal
certbot renew --dry-run
```

---

## 📝 Important Notes

### Port Configuration
- **Application Port**: 4037 (configured in ecosystem.config.js)
- **Nginx Ports**: 80 (HTTP), 443 (HTTPS)
- **Port 4037 should NOT be exposed** - only accessible via localhost
- Nginx proxies external traffic (80/443) to internal port (4037)

### File Locations
- **Project**: `/var/www/rndprojects`
- **Logs**: `/var/www/rndprojects/logs/`
- **Nginx Config**: `/etc/nginx/sites-available/rndprojects`
- **Nginx Logs**: `/var/log/nginx/`
- **PM2 Logs**: `/var/www/rndprojects/logs/`

### Security Best Practices
- Never commit `.env.local` to git
- Keep SSH key authentication enabled
- Regularly update system: `apt update && apt upgrade`
- Monitor logs for suspicious activity
- Use strong passwords/keys
- Consider installing fail2ban: `apt install fail2ban`

### Backup Strategy
- Database: Set up automated backups (if applicable)
- Code: Pushed to GitHub (automatic backup)
- Environment variables: Keep secure backup of `.env.local`
- SSL certificates: Backed up by Certbot

---

## ✅ Post-Deployment Verification

### Functional Tests
- [ ] Homepage loads correctly
- [ ] Navigation works (all menu items)
- [ ] Portfolio pages load
- [ ] Category pages work
- [ ] Contact forms submit (if applicable)
- [ ] Images load properly
- [ ] Videos play correctly
- [ ] Mobile responsive design works
- [ ] Page load speed is acceptable
- [ ] No console errors in browser

### Performance Tests
- [ ] Check PageSpeed Insights
- [ ] Verify Core Web Vitals
- [ ] Test on multiple devices
- [ ] Test on multiple browsers
- [ ] Check load time under traffic

### SEO Tests
- [ ] Meta tags present
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] SSL certificate valid
- [ ] Canonical URLs correct

---

## 🎯 Success Criteria

### Application is successfully deployed when:
1. ✅ PM2 shows application as "online"
2. ✅ Nginx is running without errors
3. ✅ Website accessible via HTTPS
4. ✅ All pages load correctly
5. ✅ SSL certificate is valid
6. ✅ No errors in logs
7. ✅ PM2 startup script configured
8. ✅ Deployment script works

---

## 📞 Quick Reference

### Essential Commands
```bash
# Application
pm2 status
pm2 logs rnd-3d-website
pm2 restart rnd-3d-website

# Nginx
systemctl status nginx
systemctl restart nginx
nginx -t

# Logs
tail -f /var/www/rndprojects/logs/pm2-combined.log
tail -f /var/log/nginx/rndprojects-error.log

# Deployment
cd /var/www/rndprojects && ./deploy.sh
```

### File Paths
```
/var/www/rndprojects/                  # Project root
/var/www/rndprojects/ecosystem.config.js  # PM2 config
/var/www/rndprojects/deploy.sh         # Deployment script
/var/www/rndprojects/.env.local        # Environment variables
/etc/nginx/sites-available/rndprojects # Nginx config
```

---

**Last Updated**: Context Transfer Session
**Status**: Ready for deployment
**Next Step**: Begin Phase 1 - VPS Initial Setup

---

## Need Help?

Refer to:
- `DEPLOYMENT_GUIDE.md` - Detailed step-by-step guide
- `ecosystem.config.js` - PM2 configuration
- `deploy.sh` - Automated deployment script

For specific issues, check the Troubleshooting section or consult:
- PM2 Documentation: https://pm2.keymetrics.io/docs/
- Next.js Deployment: https://nextjs.org/docs/deployment
- Nginx Documentation: https://nginx.org/en/docs/
