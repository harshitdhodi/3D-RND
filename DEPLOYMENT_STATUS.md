# VPS Deployment Configuration - Status Summary

## 📦 What's Been Done

### ✅ Completed Tasks

#### 1. PM2 Ecosystem Configuration (`ecosystem.config.js`)
- **Status**: ✅ Created and committed to GitHub
- **Location**: `/var/www/rndprojects` (VPS path)
- **Port**: 4037
- **Process Manager**: PM2 in cluster mode
- **Features**:
  - Auto-scaling with max instances
  - Automatic restart on crashes (max 10 restarts)
  - Memory limit: 1GB per instance
  - Log management with timestamps
  - Zero-downtime reload support
  - Production environment configuration

#### 2. Automated Deployment Script (`deploy.sh`)
- **Status**: ✅ Created and committed to GitHub
- **Purpose**: One-command deployment automation
- **Features**:
  - Git pull from main branch
  - Smart dependency installation (only if package.json changes)
  - Automated build process
  - Zero-downtime PM2 reload
  - Status monitoring and logging
  - Colored output for better visibility

#### 3. Comprehensive Deployment Guide (`DEPLOYMENT_GUIDE.md`)
- **Status**: ✅ Created and committed to GitHub
- **Sections Include**:
  - VPS initial setup (Node.js, PM2, Nginx)
  - Project directory structure
  - Environment configuration
  - Build and deployment steps
  - Nginx reverse proxy setup
  - SSL certificate installation (Let's Encrypt)
  - Firewall configuration
  - Monitoring commands
  - Troubleshooting guide
  - Performance optimization tips

#### 4. Deployment Checklist (`DEPLOYMENT_CHECKLIST.md`)
- **Status**: ✅ Just created (needs to be committed)
- **Purpose**: Step-by-step checklist for deployment
- **Features**:
  - Phase-by-phase deployment steps
  - Configuration values reference
  - Verification checklist
  - Troubleshooting quick reference
  - Post-deployment testing guide

#### 5. Git Repository Management
- **Status**: ✅ All files committed and ready
- **Repository**: `https://github.com/harshitdhodi/3D-RND.git`
- **Branch**: `main`
- **Last Commit**: `1620d83` (deployment files added)
- **Committed Files**:
  - `ecosystem.config.js`
  - `deploy.sh`
  - `DEPLOYMENT_GUIDE.md`
  - `GIT_COMMIT_SUMMARY.md`

---

## 📋 Configuration Details

### Application Configuration
```javascript
// ecosystem.config.js
{
  name: 'rnd-3d-website',
  cwd: '/var/www/rndprojects',
  port: 4037,
  instances: 'max',           // Auto-scale to CPU cores
  exec_mode: 'cluster',       // Cluster mode for high availability
  max_memory_restart: '1G',   // Auto-restart at 1GB memory
  autorestart: true,          // Always restart on crash
}
```

### Nginx Configuration
- **Reverse Proxy**: Port 80/443 → Port 4037
- **SSL**: Let's Encrypt (to be configured)
- **Domain**: YOUR_DOMAIN_HERE (placeholder)
- **Gzip**: Enabled for compression
- **Caching**: Static files cached for 1 hour
- **Security Headers**: Enabled

### File Structure
```
/var/www/rndprojects/
├── ecosystem.config.js     # PM2 configuration
├── deploy.sh              # Deployment automation
├── DEPLOYMENT_GUIDE.md    # Step-by-step guide
├── .env.local            # Environment variables (to be created on VPS)
├── src/                  # Source code
├── public/              # Static assets
├── .next/               # Build output
└── logs/                # Application logs
    ├── pm2-error.log
    ├── pm2-out.log
    └── pm2-combined.log
```

---

## 🔄 Next Steps (To Be Done on VPS)

### Phase 1: VPS Setup (Required)
1. **Connect to VPS**: `ssh root@YOUR_VPS_IP`
2. **Install Node.js** (v18+): Use nvm
3. **Install PM2**: `npm install -g pm2`
4. **Install Nginx**: `apt install nginx -y`
5. **Install Git**: `apt install git -y`

### Phase 2: Deploy Application
1. **Clone repository**:
   ```bash
   cd /var/www
   git clone https://github.com/harshitdhodi/3D-RND.git rndprojects
   cd rndprojects
   ```

2. **Create environment file**:
   ```bash
   nano /var/www/rndprojects/.env.local
   ```
   Add:
   ```env
   NODE_ENV=production
   ```

3. **Install and build**:
   ```bash
   npm install
   npm run build
   ```

4. **Start with PM2**:
   ```bash
   pm2 start ecosystem.config.js --env production
   pm2 save
   pm2 startup
   ```

### Phase 3: Configure Nginx
1. **Create Nginx config**: `/etc/nginx/sites-available/rndprojects`
2. **Update domain name** in config
3. **Enable site**: Create symlink in `sites-enabled`
4. **Test and restart**: `nginx -t && systemctl restart nginx`

### Phase 4: SSL Certificate
1. **Install Certbot**: `apt install certbot python3-certbot-nginx -y`
2. **Get certificate**: `certbot --nginx -d yourdomain.com`
3. **Test auto-renewal**: `certbot renew --dry-run`

### Phase 5: Configure Firewall
```bash
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable
```

---

## 🎯 Important Configuration Values

### Must Update Before Deployment:
1. **VPS IP Address**: Replace `YOUR_VPS_IP` in commands
2. **Domain Name**: Replace `yourdomain.com` in Nginx config
3. **Environment Variables**: Create `.env.local` with production values
4. **Port Verification**: Ensure ecosystem.config.js PORT (4037) matches Nginx proxy_pass

### Default Values (Can be changed):
- **Port**: 4037 (internal, not exposed)
- **Memory Limit**: 1GB per instance
- **Project Path**: `/var/www/rndprojects`
- **Log Path**: `/var/www/rndprojects/logs/`

---

## 📊 Deployment Workflow

### First Time Deployment:
```bash
# 1. Setup VPS (one time)
apt update && apt upgrade -y
# Install Node.js, PM2, Nginx, Git

# 2. Clone and setup project
cd /var/www
git clone https://github.com/harshitdhodi/3D-RND.git rndprojects
cd rndprojects
mkdir -p logs

# 3. Configure environment
nano .env.local  # Add production variables

# 4. Build and start
npm install
npm run build
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup  # Run the generated command

# 5. Configure Nginx
nano /etc/nginx/sites-available/rndprojects  # Add config
ln -s /etc/nginx/sites-available/rndprojects /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# 6. SSL
certbot --nginx -d yourdomain.com

# 7. Firewall
ufw allow 22 && ufw allow 80 && ufw allow 443
ufw enable
```

### Subsequent Deployments:
```bash
# Quick method
cd /var/www/rndprojects
./deploy.sh

# Or manual
git pull origin main
npm install
npm run build
pm2 reload rnd-3d-website
```

---

## 🔍 Verification Checklist

### After Deployment, Verify:
- [ ] PM2 shows app as "online": `pm2 status`
- [ ] Logs show no errors: `pm2 logs rnd-3d-website`
- [ ] Local access works: `curl http://localhost:4037`
- [ ] Public access works: Visit `http://YOUR_VPS_IP`
- [ ] Domain works: Visit `https://yourdomain.com`
- [ ] SSL certificate valid (green lock icon)
- [ ] All pages load correctly
- [ ] Images and videos load
- [ ] No console errors

---

## 🛠️ Useful Commands

### Application Management
```bash
# Status and logs
pm2 status
pm2 logs rnd-3d-website
pm2 monit

# Restart/Reload
pm2 restart rnd-3d-website
pm2 reload rnd-3d-website

# Stop/Start
pm2 stop rnd-3d-website
pm2 start ecosystem.config.js --env production
```

### Nginx Management
```bash
# Status
systemctl status nginx

# Test config
nginx -t

# Restart
systemctl restart nginx

# Logs
tail -f /var/log/nginx/rndprojects-access.log
tail -f /var/log/nginx/rndprojects-error.log
```

### System Monitoring
```bash
# Resources
df -h        # Disk space
free -h      # Memory
top          # CPU usage

# Logs
tail -f /var/www/rndprojects/logs/pm2-combined.log
```

---

## ⚠️ Common Issues & Solutions

### Issue: Application won't start
```bash
# Check logs for errors
pm2 logs rnd-3d-website

# Check if port is in use
lsof -i :4037

# Rebuild and restart
npm run build
pm2 restart rnd-3d-website
```

### Issue: Nginx 502 Bad Gateway
```bash
# Verify app is running
pm2 status

# Check port matches
grep PORT ecosystem.config.js
grep proxy_pass /etc/nginx/sites-available/rndprojects

# Restart both
pm2 restart rnd-3d-website
systemctl restart nginx
```

### Issue: Can't access from domain
```bash
# Check DNS
nslookup yourdomain.com

# Check Nginx config
nginx -t

# Check firewall
ufw status

# Check logs
tail -f /var/log/nginx/error.log
```

---

## 📚 Documentation Files

### Available Documentation:
1. **DEPLOYMENT_GUIDE.md** - Complete step-by-step deployment guide
2. **DEPLOYMENT_CHECKLIST.md** - Phase-by-phase checklist (this file)
3. **ecosystem.config.js** - PM2 configuration file
4. **deploy.sh** - Automated deployment script

### Read These Before Deploying:
1. Start with `DEPLOYMENT_CHECKLIST.md` for overview
2. Follow `DEPLOYMENT_GUIDE.md` for detailed steps
3. Use `deploy.sh` for automated updates
4. Reference `ecosystem.config.js` for configuration

---

## 🚀 Quick Start (TL;DR)

If you're experienced with VPS deployment:

```bash
# On VPS (as root)
apt update && apt upgrade -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18 && nvm use 18
npm install -g pm2
apt install nginx git -y

cd /var/www
git clone https://github.com/harshitdhodi/3D-RND.git rndprojects
cd rndprojects
mkdir logs
nano .env.local  # Add: NODE_ENV=production

npm install && npm run build
pm2 start ecosystem.config.js --env production
pm2 save && pm2 startup  # Run generated command

# Configure Nginx (update domain in config)
nano /etc/nginx/sites-available/rndprojects
ln -s /etc/nginx/sites-available/rndprojects /etc/nginx/sites-enabled/
nginx -t && systemctl restart nginx

# SSL
apt install certbot python3-certbot-nginx -y
certbot --nginx -d yourdomain.com

# Firewall
ufw allow 22 && ufw allow 80 && ufw allow 443 && ufw enable

# Verify
pm2 status
curl http://localhost:4037
```

---

## 📝 Notes

### Security Considerations:
- ✅ Application runs on internal port 4037 (not exposed)
- ✅ Nginx handles external traffic on 80/443
- ✅ Firewall blocks unnecessary ports
- ⏳ SSL certificate (to be configured)
- 💡 Consider: fail2ban, SSH key auth, disable root login

### Performance:
- ✅ Cluster mode for multi-core utilization
- ✅ Automatic restart on crashes
- ✅ Memory management (1GB limit)
- ✅ Zero-downtime reloads
- 💡 Monitor with `pm2 monit`

### Maintenance:
- 🔄 Update code: `./deploy.sh`
- 📊 Monitor: `pm2 monit`
- 📝 Check logs: `pm2 logs rnd-3d-website`
- 🔒 Update system: `apt update && apt upgrade`

---

## ✅ Status Summary

### Current Status:
- ✅ **Deployment files created and committed**
- ✅ **GitHub repository ready**
- ✅ **Documentation complete**
- ⏳ **VPS deployment pending** (requires manual setup)

### Ready for:
1. VPS initial setup
2. Application deployment
3. Nginx configuration
4. SSL certificate installation
5. Production launch

### Estimated Time:
- **First-time deployment**: 30-60 minutes
- **Subsequent updates**: 2-5 minutes (using deploy.sh)

---

**Repository**: https://github.com/harshitdhodi/3D-RND.git  
**Branch**: main  
**Status**: Ready for VPS deployment  
**Next Action**: Follow DEPLOYMENT_CHECKLIST.md Phase 1

---

## Questions?

If you encounter any issues during deployment:
1. Check `DEPLOYMENT_GUIDE.md` troubleshooting section
2. Review logs: `pm2 logs` and `/var/log/nginx/`
3. Verify configuration files match documented values
4. Ensure all placeholders (domain, IP) are updated

**Good luck with your deployment! 🚀**
