#!/bin/bash
set -e
echo "Deployment started ..."
git pull origin main
npm install
npm run build