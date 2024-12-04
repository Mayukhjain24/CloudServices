#!/bin/bash

# Navigate to the project directory
cd /Users/Mayuk/Desktop/Cloud services

# Add all changes to the Git staging area
git add .

# Commit changes with a timestamped message
git commit -m "Auto-update: $(date)"

# Push changes to the main branch
git push origin main
