#!/bin/bash
service nginx restart > /var/log/restartapache.out 2>&1
npm install /var/www/html
pm2 restart server
