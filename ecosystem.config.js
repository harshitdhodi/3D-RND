module.exports = {
  apps: [
    {
      name: 'rnd-3d-website',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/rndprojects',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 4037,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4037,
      },
      error_file: '/var/www/rndprojects/logs/pm2-error.log',
      out_file: '/var/www/rndprojects/logs/pm2-out.log',
      log_file: '/var/www/rndprojects/logs/pm2-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      kill_timeout: 5000,
      listen_timeout: 4037,
      wait_ready: true,
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'YOUR_VPS_IP',
      ref: 'origin/main',
      repo: 'https://github.com/harshitdhodi/3D-RND.git',
      path: '/var/www/rndprojects',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'StrictHostKeyChecking=no',
    },
  },
};
