# React-Wind Deployment Guide 🚀

This guide will help you publish React-Wind to npm and push it to the GitHub repository.

## Prerequisites ✅

1. **npm account**: Create one at [npmjs.com](https://www.npmjs.com)
2. **GitHub account**: Access to the React-Wind organization
3. **Git installed**: Check with `git --version`
4. **Node.js installed**: Check with `node --version`

## Step 1: Verify Package Integrity 🔍

Before publishing, verify everything is correct:

```bash
# Check package.json
cat package.json

# Verify the package name is "react-wind"
# Verify the version is correct
# Verify repository URL is correct

# Test the CLI locally
npm link
react-wind test-app
cd test-app
npm run dev
npm run build
cd ..
npm unlink -g react-wind
rm -rf test-app
```

## Step 2: Initialize Git Repository 📦

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit with a meaningful message
git commit -m "chore: rebrand to react-wind with complete documentation"
```

## Step 3: Push to GitHub 🌐

```bash
# Add the remote repository
git remote add origin https://github.com/React-Wind/react-wind.git

# Verify the remote
git remote -v

# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

If you encounter authentication issues, you may need to use a personal access token:
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate a token with `repo` permissions
3. Use the token as your password when pushing

## Step 4: Login to npm 🔐

```bash
# Login to npm
npm login

# Enter your credentials:
# - Username
# - Password
# - Email
# - One-time password (if 2FA is enabled)

# Verify you're logged in
npm whoami
```

## Step 5: Publish to npm 📤

```bash
# First, do a dry run to see what would be published
npm publish --dry-run

# Review the output carefully
# Make sure only necessary files are included

# If everything looks good, publish!
npm publish --access public

# For scoped packages, use:
# npm publish --access public
```

## Step 6: Verify Publication ✨

```bash
# Check your package on npm
open https://www.npmjs.com/package/react-wind

# Test installation from npm
cd /tmp
npm create react-wind@latest test-from-npm
cd test-from-npm
npm run dev
```

## Step 7: Create GitHub Release 🏷️

1. Go to https://github.com/React-Wind/react-wind/releases
2. Click "Create a new release"
3. Create a tag: `v1.0.0`
4. Release title: `v1.0.0 - Initial Release`
5. Description:
```markdown
## 🎉 Initial Release of React-Wind

### Features
- ⚡ Lightning-fast React project scaffolding
- 🎨 Pre-configured with Vite 5 and Tailwind CSS 3
- 📦 Automatic dependency installation
- 🔧 Zero-config setup

### Installation
npm create react-wind@latest my-app

### Documentation
See the [README](https://github.com/React-Wind/react-wind#readme) for full documentation.
```
6. Click "Publish release"

## Version Management 📊

### Updating Versions

For future updates, use semantic versioning:

```bash
# Patch release (bug fixes): 1.0.0 → 1.0.1
npm version patch

# Minor release (new features): 1.0.0 → 1.1.0
npm version minor

# Major release (breaking changes): 1.0.0 → 2.0.0
npm version major

# After updating version
git push --follow-tags
npm publish
```

## Troubleshooting 🔧

### Issue: Package name already taken
**Solution**: The package name "react-wind" should be available, but if not, check on npmjs.com or consider a scoped package like `@yourname/react-wind`

### Issue: Git push authentication failed
**Solution**: Use a personal access token instead of password
1. Generate token on GitHub
2. Use token as password when pushing

### Issue: npm publish permission denied
**Solution**: 
- Verify you're logged in: `npm whoami`
- Check package name isn't taken
- Use `--access public` flag

### Issue: Files not included in package
**Solution**: 
- Check `.npmignore` file
- Verify `files` field in `package.json`
- Use `npm publish --dry-run` to preview

## Quick Reference Commands 📝

```bash
# Complete publishing workflow
git add .
git commit -m "chore: release v1.0.0"
git tag v1.0.0
git push origin main --tags
npm publish --access public

# Update and republish
npm version patch
git push --follow-tags
npm publish
```

## Post-Publication Checklist ✅

- [ ] Package appears on npmjs.com
- [ ] README displays correctly on npm
- [ ] Installation works: `npm create react-wind@latest test`
- [ ] GitHub repository is updated
- [ ] GitHub release is created
- [ ] All links in README work
- [ ] License file is present
- [ ] Contributing guide is accessible

## Maintaining the Package 🛠️

### Regular Updates
1. Monitor issues and PRs on GitHub
2. Test new versions thoroughly
3. Update dependencies regularly
4. Follow semantic versioning
5. Write clear changelog entries

### Community Engagement
- Respond to issues promptly
- Review and merge PRs
- Update documentation
- Share updates on social media

## Support 💬

If you encounter any issues:
- Check [npm documentation](https://docs.npmjs.com/)
- Check [GitHub documentation](https://docs.github.com/)
- Open an issue on the repository

---

**Congratulations on publishing React-Wind! 🎉**

Your package is now available for developers worldwide to use.
