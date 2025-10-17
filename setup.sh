#!/bin/bash

# Blog Content Generator Setup Script
# This script helps you set up the project quickly

echo "🚀 Blog Content Generator - Setup Script"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo ""

echo "Installing backend dependencies..."
npm install

echo ""
echo "Installing frontend dependencies..."
cd client && npm install && cd ..

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp env.template .env
    echo "✅ .env file created!"
    echo ""
    echo "⚠️  IMPORTANT: You need to add your API keys to the .env file"
    echo ""
    echo "Please edit .env and add:"
    echo "  1. OpenAI API Key from https://platform.openai.com/api-keys"
    echo "  2. Unsplash Access Key from https://unsplash.com/developers"
    echo ""
else
    echo "✅ .env file already exists"
    echo ""
fi

echo "=========================================="
echo "✨ Setup Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "  1. Edit .env file and add your API keys"
echo "  2. Run: npm run dev"
echo "  3. Open: http://localhost:5173"
echo ""
echo "For detailed instructions, see:"
echo "  - QUICKSTART.md for quick start"
echo "  - README.md for full documentation"
echo "  - ENV_SETUP.md for API key help"
echo ""
echo "Happy blogging! 🎉"

