#!/bin/bash

# Production Build Script for Government College Mohali Website
# This script ensures optimal build configuration for production deployment

echo "🏗️  Starting production build for Government College Mohali website..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run TypeScript check
echo "🔍 Running TypeScript check..."
npm run build:check || {
    echo "❌ TypeScript check failed. Please fix the errors before deploying."
    exit 1
}

# Build for production
echo "🚀 Building for production..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo "📊 Build statistics:"
    du -sh dist/
    echo "📁 Build contents:"
    ls -la dist/
    echo ""
    echo "🎉 Ready for deployment!"
    echo "📤 Run 'vercel --prod' to deploy to production"
else
    echo "❌ Build failed! Check the errors above."
    exit 1
fi
