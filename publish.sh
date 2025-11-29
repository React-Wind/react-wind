#!/bin/bash

# React-Wind Publishing Script
# This script will help you publish React-Wind to GitHub and npm

set -e  # Exit on error

echo "🌊 React-Wind Publishing Script"
echo "================================"
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Verify we're in the correct directory
echo -e "${BLUE}Step 1: Verifying directory...${NC}"
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found. Please run this script from the react-wind directory."
    exit 1
fi

# Check package name
PACKAGE_NAME=$(node -p "require('./package.json').name")
if [ "$PACKAGE_NAME" != "react-wind" ]; then
    echo "Error: Package name is not 'react-wind'. Found: $PACKAGE_NAME"
    exit 1
fi

echo -e "${GREEN}✓ Correct directory${NC}"
echo ""

# Step 2: Initialize Git
echo -e "${BLUE}Step 2: Initializing Git repository...${NC}"
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
else
    echo -e "${YELLOW}! Git already initialized${NC}"
fi
echo ""

# Step 3: Add all files
echo -e "${BLUE}Step 3: Adding files to Git...${NC}"
git add .
echo -e "${GREEN}✓ Files added${NC}"
echo ""

# Step 4: Create commit
echo -e "${BLUE}Step 4: Creating commit...${NC}"
git commit -m "feat: initial release of React-Wind v1.0.0

- Rebranded from create-jamjs to react-wind
- Added comprehensive documentation (README, CONTRIBUTING, DEPLOYMENT)
- Ready for npm publication
- Supports npm create react-wind@latest command" || echo -e "${YELLOW}! Nothing to commit or already committed${NC}"
echo ""

# Step 5: Add remote
echo -e "${BLUE}Step 5: Adding GitHub remote...${NC}"
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/React-Wind/react-wind.git
echo -e "${GREEN}✓ Remote added${NC}"
echo ""

# Step 6: Rename branch to main
echo -e "${BLUE}Step 6: Setting branch to main...${NC}"
git branch -M main
echo -e "${GREEN}✓ Branch set to main${NC}"
echo ""

# Step 7: Show git status
echo -e "${BLUE}Step 7: Git status${NC}"
git status
echo ""

# Step 8: Instructions for pushing to GitHub
echo -e "${YELLOW}================================${NC}"
echo -e "${YELLOW}MANUAL STEPS REQUIRED:${NC}"
echo -e "${YELLOW}================================${NC}"
echo ""
echo "Now you need to:"
echo ""
echo -e "${GREEN}1. Push to GitHub:${NC}"
echo "   git push -u origin main"
echo ""
echo "   If you get an authentication error, you may need a Personal Access Token:"
echo "   - Go to: https://github.com/settings/tokens"
echo "   - Generate new token (classic)"
echo "   - Select 'repo' scope"
echo "   - Use the token as your password when pushing"
echo ""
echo -e "${GREEN}2. Create and push tag:${NC}"
echo "   git tag v1.0.0"
echo "   git push origin v1.0.0"
echo ""
echo -e "${GREEN}3. Login to npm:${NC}"
echo "   npm login"
echo "   (Enter your npm credentials)"
echo ""
echo -e "${GREEN}4. Publish to npm:${NC}"
echo "   npm publish --dry-run  # Review what will be published"
echo "   npm publish --access public  # Publish for real"
echo ""
echo -e "${GREEN}5. Verify publication:${NC}"
echo "   Open: https://www.npmjs.com/package/react-wind"
echo "   Test: npm create react-wind@latest test-app"
echo ""
echo -e "${GREEN}6. Create GitHub Release:${NC}"
echo "   - Go to: https://github.com/React-Wind/react-wind/releases/new"
echo "   - Tag: v1.0.0"
echo "   - Title: v1.0.0 - Initial Release"
echo "   - Description: Copy from CHANGELOG.md"
echo "   - Publish release"
echo ""
echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}Ready to publish! 🚀${NC}"
echo -e "${BLUE}================================${NC}"
