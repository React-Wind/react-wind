# React-Wind 🌊

<div align="center">

**A powerful CLI tool for scaffolding modern React applications with Vite and Tailwind CSS**

[![npm version](https://img.shields.io/npm/v/react-wind.svg)](https://www.npmjs.com/package/react-wind)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/react-wind.svg)](https://nodejs.org)

*Lightning-fast project setup for modern web development*

</div>

---

## ✨ Features

- ⚡ **Lightning Fast** - Scaffold complete projects in seconds
- 🎨 **Modern Stack** - Pre-configured React 18 + Vite 5 + Tailwind CSS 3
- 📦 **Auto Install** - Automatically installs dependencies with npm or bun
- 🔧 **Zero Config** - Production-ready configuration out of the box
- 💡 **Easy to Use** - Simple, intuitive command structure
- 🚀 **Optimized Build** - Vite's optimized build process for blazing-fast performance

## 🚀 Quick Start

Create a new React app with a single command:

```bash
npm create react-wind@latest my-react-app
```

That's it! Your project will be created with all dependencies installed.

## 📦 Installation Methods

### Method 1: npm create (Recommended)

```bash
npm create react-wind@latest my-app
```

### Method 2: Using npx

```bash
npx react-wind my-app
```

### Method 3: Global Installation

```bash
npm install -g react-wind
react-wind my-app
```

## 🎯 Usage

### Create a New Project

```bash
# Quick start with default template
npm create react-wind@latest my-app

# Or with template specification
react-wind create react my-app
```

**What happens:**
1. ✅ Template files are copied to your project directory
2. ✅ Dependencies are automatically installed
3. ✅ Project is ready to run!

### Start Development

```bash
cd my-app
npm run dev
```

Your app will be running at **http://localhost:5173** 🎉

## 📚 What's Included?

### React 18 ⚛️
- Modern React with hooks
- Fast Refresh for instant feedback
- Optimized production builds
- Component-based architecture

### Vite 5 ⚡
- Lightning-fast dev server with HMR
- Instant Hot Module Replacement
- Optimized build process
- Native ES modules support

### Tailwind CSS 3 🎨
- Utility-first CSS framework
- Pre-configured with PostCSS
- Automatic purging of unused styles
- Responsive design utilities
- Dark mode support

## 🛠️ Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Lint your code
npm run lint
```


## 🎨 Customization

### Tailwind Configuration

Customize your design system in `tailwind.config.js`:

```javascript
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
    },
  },
  plugins: [],
}
```

### Vite Configuration

Modify build settings in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add your custom configuration
})
```

## 🔄 Package Manager Support

React-Wind automatically detects and uses your preferred package manager:

- 🟢 **Bun** - If available, uses bun for faster installation
- 🔵 **npm** - Falls back to npm if bun is not installed

## 💻 Requirements

- **Node.js** >= 14.0.0
- **npm** or **bun**

## 🧪 Local Development & Testing

To test React-Wind locally before publishing:

```bash
# Clone the repository
git clone https://github.com/React-Wind/react-wind.git
cd react-wind

# Install dependencies
npm install

# Link the package globally
npm link

# Now you can use 'react-wind' globally
react-wind test-app

# Or test the npm create pattern
npm create react-wind test-app

# When done testing, unlink
npm unlink -g react-wind
```

## 🤝 Contributing

We love contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

Quick steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

Found a bug? Please open an issue on our [GitHub Issues](https://github.com/React-Wind/react-wind/issues) page.

## 🌟 Show Your Support

If you find React-Wind helpful, please give it a ⭐ on [GitHub](https://github.com/React-Wind/react-wind)!

## 📧 Contact

- **Author**: Nitheesh Rajendran
- **GitHub**: [@React-Wind](https://github.com/React-Wind)
- **Issues**: [GitHub Issues](https://github.com/React-Wind/react-wind/issues)

## 🙏 Acknowledgments

- [React](https://react.dev/) - The React team
- [Vite](https://vitejs.dev/) - The Vite team
- [Tailwind CSS](https://tailwindcss.com/) - The Tailwind team

---

<div align="center">

**Made with ❤️ for developers who love beautiful, fast web applications**

[Documentation](https://github.com/React-Wind/react-wind#readme) • [Report Bug](https://github.com/React-Wind/react-wind/issues) • [Request Feature](https://github.com/React-Wind/react-wind/issues)

</div>
