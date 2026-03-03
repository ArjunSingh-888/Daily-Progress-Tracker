#!/bin/bash

echo "========================================"
echo " Daily Progress Tracker - Quick Start"
echo "========================================"
echo ""

echo "[1/3] Checking Node.js installation..."
if ! command -v node &> /dev/null
then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org/"
    echo ""
    exit 1
fi

node --version
echo "Node.js found!"
echo ""

echo "[2/3] Installing dependencies..."
echo "This may take a few minutes..."
echo ""
npm install

if [ $? -ne 0 ]; then
    echo ""
    echo "ERROR: Installation failed!"
    echo "Please check your internet connection and try again."
    echo ""
    exit 1
fi

echo ""
echo "[3/3] Starting development server..."
echo ""
echo "========================================"
echo " Installation complete!"
echo "========================================"
echo ""
echo "The app will open in your browser at:"
echo "http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================"
echo ""

npm run dev
