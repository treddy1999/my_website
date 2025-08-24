# Deployment Guide for Portfolio Website

## GitHub Pages Deployment

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/treddy1999/portfolio-website`
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### Step 2: Push the Updated Code
After the GitHub Actions workflow is set up, push your changes:

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### Step 3: Wait for Deployment
1. Go to "Actions" tab in your repository
2. You should see a workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be available at: `https://treddy1999.github.io/portfolio-website`

## Alternative: Vercel Deployment (Recommended)

### Step 1: Go to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account

### Step 2: Import Repository
1. Click "New Project"
2. Import your `treddy1999/portfolio-website` repository
3. Click "Deploy"

### Step 3: Get Your URL
Your site will be deployed to: `https://portfolio-website-treddy1999.vercel.app`

## Troubleshooting

### If GitHub Pages shows README:
- Make sure the GitHub Actions workflow completed successfully
- Check that the `gh-pages` branch was created
- Verify the Pages source is set to `gh-pages` branch

### If images don't load:
- Make sure all images are in the `public` folder
- Check that image paths are correct (should start with `/`)

### If styles don't load:
- This is normal for static export - the build process handles this
- Make sure the build completed without errors

