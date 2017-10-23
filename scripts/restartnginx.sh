#!/bin/bash
service nginx restart > /var/log/restartapache.out 2>&1
cd /var/www/html
npm install
pm2 restart server
