#!/bin/bash
service nginx restart > /var/log/restartapache.out 2>&1
npm install
pm2 restart server
