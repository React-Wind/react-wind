# Contributing to React-Wind 🌊

First off, thank you for considering contributing to React-Wind! It's people like you that make React-Wind such a great tool.

## 🌟 How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Include your environment details:**
  - Node.js version
  - npm/bun version
  - Operating system
  - React-Wind version

**Bug Report Template:**

```markdown
## Description
A clear description of the bug

## Steps to Reproduce
1. Run command '...'
2. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Environment
- OS: [e.g., macOS 13.0]
- Node: [e.g., 18.12.0]
- npm: [e.g., 9.1.0]
- React-Wind: [e.g., 1.0.0]

## Additional Context
Any other relevant information
```

### Suggesting Enhancements 💡

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List some examples of how it would be used**

### Pull Requests 🚀

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/react-wind.git
   cd react-wind
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Your Changes**
   - Write clear, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test Your Changes**
   ```bash
   # Link the package locally
   npm link
   
   # Test the CLI
   react-wind test-app
   cd test-app
   npm run dev
   
   # Verify everything works
   npm run build
   ```

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   **Commit Message Guidelines:**
   - `feat:` - A new feature
   - `fix:` - A bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template
   - Submit!

## 📋 Pull Request Guidelines

### PR Title Format
```
type: brief description
```

Examples:
- `feat: add TypeScript support`
- `fix: resolve dependency installation issue`
- `docs: update installation instructions`

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2

## Testing
Describe how you tested your changes

## Checklist
- [ ] My code follows the project's code style
- [ ] I have tested my changes
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
```

## 🏗️ Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/React-Wind/react-wind.git
   cd react-wind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Link for local testing**
   ```bash
   npm link
   ```

4. **Make changes and test**
   ```bash
   # Create a test project
   react-wind my-test-app
   cd my-test-app
   npm run dev
   ```

5. **Unlink when done**
   ```bash
   npm unlink -g react-wind
   ```

## 📁 Project Structure

```
react-wind/
├── bin/
│   └── cli.js              # Main CLI script
├── templates/
│   └── react-vite-tailwind/ # Default template
├── package.json            # Package configuration
├── README.md              # Main documentation
└── CONTRIBUTING.md        # This file
```

## 🎨 Code Style Guidelines

- **JavaScript**: Use modern ES6+ syntax
- **Indentation**: 4 spaces (already configured)
- **Semicolons**: Use them
- **Quotes**: Single quotes for strings
- **Naming**: camelCase for variables and functions
- **Comments**: Write clear, concise comments for complex logic

## 🧪 Testing Guidelines

Before submitting a PR, please test:

1. **Basic Functionality**
   ```bash
   react-wind test-app
   cd test-app
   npm run dev
   npm run build
   ```

2. **Different Scenarios**
   - Test with npm
   - Test with bun (if available)
   - Test error cases
   - Test edge cases

3. **Documentation**
   - Ensure README is up to date
   - Update CONTRIBUTING.md if needed
   - Add JSDoc comments for new functions

## 📝 Documentation

- Keep README.md up to date
- Document new features
- Add examples for new functionality
- Update configuration examples if needed

## 🔧 Adding New Templates

To add a new template:

1. Create a new directory in `templates/`
2. Add all necessary files
3. Update `cli.js` to include the new template
4. Add documentation in README.md
5. Test thoroughly

## 🚀 Release Process

(For Maintainers)

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create a git tag
4. Push to GitHub
5. Publish to npm

## 💬 Community Guidelines

- Be respectful and inclusive
- Help others when possible
- Provide constructive feedback
- Follow the code of conduct

## ❓ Questions?

If you have questions:
- Open a [GitHub Discussion](https://github.com/React-Wind/react-wind/discussions)
- Check existing [Issues](https://github.com/React-Wind/react-wind/issues)
- Read the [README](README.md)

## 🙏 Recognition

Contributors will be:
- Listed in the repository
- Credited in release notes
- Part of making React-Wind better!

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

## 📧 Contact

- **Issues**: [GitHub Issues](https://github.com/React-Wind/react-wind/issues)
- **Discussions**: [GitHub Discussions](https://github.com/React-Wind/react-wind/discussions)

---

**Thank you for contributing to React-Wind! 🌊**

Together, we're making web development faster and more enjoyable for everyone.
