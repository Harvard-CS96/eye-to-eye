#!/bin/bash
service nginx start > /var/log/startnginx.out 2>&1
npm install /var/www/html
