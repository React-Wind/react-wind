# Quick Start Guide - Publishing React-Wind 🚀

Follow these exact commands to publish React-Wind to GitHub and npm.

## Prerequisites Check ✅

Make sure you have:
- [ ] npm account (sign up at npmjs.com)
- [ ] Access to https://github.com/React-Wind/react-wind repository
- [ ] Git configured with your credentials

## Step-by-Step Commands

### 1️⃣ Initialize Git and Commit

```bash
cd "/Users/nitheeshrajendran/Downloads/untitled folder/jam-cli"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial release of React-Wind v1.0.0

- Rebranded from create-jamjs to react-wind
- Added comprehensive documentation
- Ready for npm publication"
```

### 2️⃣ Push to GitHub

```bash
# Add the React-Wind repository as remote
git remote add origin https://github.com/React-Wind/react-wind.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main

# Create and push tag
git tag v1.0.0
git push origin v1.0.0
```

### 3️⃣ Login to npm

```bash
# Login to npm (you'll be prompted for credentials)
npm login
```

Enter your:
- Username
- Password  
- Email
- One-time password (if 2FA enabled)

### 4️⃣ Test Package Locally (Optional but Recommended)

```bash
# Link package locally
npm link

# Test it works
react-wind test-app
cd test-app
npm run dev

# Clean up test
cd ..
rm -rf test-app
npm unlink -g react-wind
```

### 5️⃣ Publish to npm

```bash
# Dry run to see what will be published
npm publish --dry-run

# Review the output, then publish for real
npm publish --access public
```

### 6️⃣ Verify Everything Works

```bash
# Test installation from npm
cd /tmp
npm create react-wind@latest verify-app
cd verify-app
npm run dev
```

Open your browser to http://localhost:5173 and verify the app works!

## 🎉 Success!

Your package is now live at:
- **npm**: https://www.npmjs.com/package/react-wind
- **GitHub**: https://github.com/React-Wind/react-wind

## Next Steps

1. **Create GitHub Release**:
   - Go to https://github.com/React-Wind/react-wind/releases/new
   - Tag: `v1.0.0`
   - Title: `v1.0.0 - Initial Release`
   - Copy description from CHANGELOG.md
   - Publish release

2. **Share Your Work**:
   - Tweet about it
   - Post on Reddit (r/reactjs)
   - Share on dev.to
   - Add to Awesome React lists

3. **Monitor**:
   - Watch GitHub issues
   - Check npm downloads
   - Respond to community feedback

## Troubleshooting

### "Package name already taken"
```bash
# Check if name exists
npm view react-wind

# If taken, consider scoped package
# Update package.json name to "@yourname/react-wind"
```

### "Permission denied" on GitHub push
```bash
# Use personal access token
# 1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens
# 2. Generate new token with 'repo' scope
# 3. Use token as password when pushing
```

### "Not logged in" on npm publish
```bash
# Check login status
npm whoami

# If not logged in
npm login
```

## Update Commands (For Future Releases)

```bash
# For patch updates (bug fixes)
npm version patch
git push --follow-tags
npm publish

# For minor updates (new features)
npm version minor
git push --follow-tags
npm publish

# For major updates (breaking changes)
npm version major
git push --follow-tags
npm publish
```

---

**Ready to publish? Run the commands above! 🚀**
