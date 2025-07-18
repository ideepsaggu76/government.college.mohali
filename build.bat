@echo off
REM Production Build Script for Government College Mohali Website
REM This script ensures optimal build configuration for production deployment

echo 🏗️  Starting production build for Government College Mohali website...

REM Clean previous build
echo 🧹 Cleaning previous build...
if exist dist rmdir /s /q dist

REM Install dependencies
echo 📦 Installing dependencies...
call npm ci

REM Build for production
echo 🚀 Building for production...
call npm run build

REM Check if build was successful
if exist dist (
    echo ✅ Build successful!
    echo 📊 Build statistics:
    dir dist
    echo.
    echo 🎉 Ready for deployment!
    echo 📤 Run 'vercel --prod' to deploy to production
) else (
    echo ❌ Build failed! Check the errors above.
    exit /b 1
)
