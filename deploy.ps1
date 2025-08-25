# Deploy Script for Portfolio Website
# This script builds and deploys the portfolio to GitHub Pages

Write-Host "Starting deployment process..." -ForegroundColor Green

# Step 1: Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build completed successfully!" -ForegroundColor Green

# Step 2: Check if out directory exists and has content
if (-not (Test-Path "out")) {
    Write-Host "Build output directory 'out' not found!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "out/index.html")) {
    Write-Host "index.html not found in build output!" -ForegroundColor Red
    exit 1
}

Write-Host "Build output verified!" -ForegroundColor Green

# Step 3: Copy files to gh-pages directory
Write-Host "Copying files to gh-pages directory..." -ForegroundColor Yellow
if (Test-Path "gh-pages") {
    Remove-Item -Recurse -Force "gh-pages"
}
New-Item -ItemType Directory -Name "gh-pages"
xcopy /E /I /Y out\* gh-pages\

Write-Host "Files copied to gh-pages directory!" -ForegroundColor Green

# Step 4: Switch to gh-pages branch and deploy
Write-Host "Switching to gh-pages branch..." -ForegroundColor Yellow
git checkout gh-pages

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to switch to gh-pages branch!" -ForegroundColor Red
    exit 1
}

# Step 5: Remove all files and copy fresh ones
Write-Host "Cleaning gh-pages branch..." -ForegroundColor Yellow
git rm -r --cached .
git add .
git commit -m "Deploy fresh build - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to commit changes!" -ForegroundColor Red
    exit 1
}

# Step 6: Push to remote
Write-Host "Pushing to remote repository..." -ForegroundColor Yellow
git push origin gh-pages

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to push to remote!" -ForegroundColor Red
    exit 1
}

# Step 7: Switch back to main branch
Write-Host "Switching back to main branch..." -ForegroundColor Yellow
git checkout main

Write-Host "Deployment completed successfully!" -ForegroundColor Green
Write-Host "Your portfolio should be live at: https://treddy1999.github.io/portfolio/" -ForegroundColor Cyan
Write-Host "It may take a few minutes for changes to appear." -ForegroundColor Yellow
