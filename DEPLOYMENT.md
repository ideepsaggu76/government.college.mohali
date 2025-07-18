# Vercel Deployment Guide

This guide will help you deploy your Government College Mohali website on Vercel.

## Prerequisites

1. Vercel account (free at https://vercel.com)
2. GitHub repository with your code (already done ✅)

## Deployment Steps

### Method 1: Direct GitHub Integration (Recommended)

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Sign up or login with your GitHub account

2. **Import Project**
   - Click "New Project" on your Vercel dashboard
   - Select "Import Git Repository"
   - Choose your repository: `ideepsaggu76/government.college.mohali`

3. **Configure Build Settings**
   - Vercel will automatically detect it's a Vite project
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Method 2: Vercel CLI (Alternative)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd your-project-directory
   vercel
   ```

## Automatic Deployments

Once connected to GitHub:
- Every push to the `main` branch will trigger a new deployment
- Pull requests will create preview deployments
- No manual intervention needed!

## Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

If you need environment variables:
1. Go to "Settings" → "Environment Variables"
2. Add your variables for different environments (Development, Preview, Production)

## Project Configuration

The project is already configured with:
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - Build scripts
- ✅ `.gitignore` - Excludes unnecessary files
- ✅ Build optimization settings

## Expected Build Output

- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite (React)
- Node.js Version: 18.x (default)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript compilation passes locally
- Verify all imports are correct

### 404 on Routes
- The `vercel.json` file includes rewrites for SPA routing
- All routes will serve `index.html` for client-side routing

### Large Bundle Size
- The build is optimized with Vite
- Unused code is automatically tree-shaken
- Assets are compressed and cached

## Support

For deployment issues:
- Check Vercel's documentation: https://vercel.com/docs
- Check build logs in the Vercel dashboard
- Contact Vercel support if needed

Your website will be available at: `https://government-college-mohali.vercel.app` (or similar)

## Performance Features

Vercel provides:
- ⚡ Edge Network (CDN)
- 🚀 Automatic HTTPS
- 📱 Mobile optimization
- 🔄 Automatic deployments
- 📊 Analytics (available in dashboard)
- 🎯 Performance monitoring
