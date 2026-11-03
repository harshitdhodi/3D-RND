#!/bin/bash

# 3D RND Project Deployment Script
# Usage: ./deploy.sh

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/var/www/rndprojects"
APP_NAME="rnd-3d-website"

# Print colored message
print_message() {
    echo -e "${2}${1}${NC}"
}

print_message "🚀 Starting deployment of 3D RND Website..." "$BLUE"
echo ""

# Check if running from correct directory
if [ "$PWD" != "$PROJECT_DIR" ]; then
    print_message "⚠️  Navigating to project directory..." "$YELLOW"
    cd $PROJECT_DIR
fi

# Show current git status
print_message "📊 Current Git Status:" "$BLUE"
git status --short

# Pull latest changes
print_message "📥 Pulling latest changes from Git..." "$BLUE"
if git pull origin main; then
    print_message "✅ Git pull successful" "$GREEN"
else
    print_message "❌ Git pull failed" "$RED"
    exit 1
fi

# Check if package.json changed
if git diff HEAD@{1} --name-only | grep -q "package.json"; then
    print_message "📦 package.json changed, installing dependencies..." "$YELLOW"
    npm install
else
    print_message "⏭️  No dependency changes detected" "$BLUE"
fi

# Build application
print_message "🔨 Building Next.js application..." "$BLUE"
if npm run build; then
    print_message "✅ Build successful" "$GREEN"
else
    print_message "❌ Build failed" "$RED"
    exit 1
fi

# Check if PM2 app exists
if pm2 describe $APP_NAME > /dev/null 2>&1; then
    print_message "♻️  Reloading application with PM2 (zero-downtime)..." "$BLUE"
    pm2 reload ecosystem.config.js --env production
else
    print_message "🆕 Starting application with PM2..." "$BLUE"
    pm2 start ecosystem.config.js --env production
fi

# Save PM2 configuration
pm2 save

# Show status
echo ""
print_message "📊 Application Status:" "$BLUE"
pm2 status

# Show recent logs
echo ""
print_message "📋 Recent Logs (last 20 lines):" "$BLUE"
pm2 logs $APP_NAME --lines 20 --nostream

echo ""
print_message "✅ Deployment completed successfully!" "$GREEN"
print_message "🌐 Your application should now be live!" "$GREEN"
echo ""
print_message "Useful commands:" "$BLUE"
echo "  - View logs:     pm2 logs $APP_NAME"
echo "  - Monitor:       pm2 monit"
echo "  - Status:        pm2 status"
echo "  - Restart:       pm2 restart $APP_NAME"
echo ""
