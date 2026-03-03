@echo off
echo ========================================
echo  Daily Progress Tracker - Quick Start
echo ========================================
echo.

echo [1/3] Checking Node.js installation...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

node --version
echo Node.js found!
echo.

echo [2/3] Installing dependencies...
echo This may take a few minutes...
echo.
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Installation failed!
    echo Please check your internet connection and try again.
    echo.
    pause
    exit /b 1
)

echo.
echo [3/3] Starting development server...
echo.
echo ========================================
echo  Installation complete!
echo ========================================
echo.
echo The app will open in your browser at:
echo http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev
