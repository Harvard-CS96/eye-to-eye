#!/bin/bash
service nginx restart > /var/log/restartapache.out 2>&1
pm2 restart server
