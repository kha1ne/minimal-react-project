# Minimal React Project

A minimalist, well-structured React + Lit hybrid project built with Vite, TypeScript, and modern web standards. Showcases seamless integration of React components and Lit web components following clean architecture principles.

## 🚀 Features

- **React 19.2.0** - Latest React with modern hooks and concurrent features
- **TypeScript 5.9.3** - Type safety and modern JavaScript features
- **Vite 7.1.10** - Lightning-fast dev server and build tool
- **Node.js 25.2.0** - Latest LTS Node.js runtime
- **Yarn Berry 4.11.0** - Modern package management with node_modules
- **Lit 3.3.1** - Web Components with Shadow DOM isolation
- **@lit-labs/react** - Seamless Lit-React interop
- **Path Aliases** - Clean imports using `@components`, `@utils`, etc.
- **Vitest 3.2.4** - Modern testing framework with coverage
- **Testing Library** - React testing best practices
- **ESLint 9** - Modern flat config with TypeScript-aware linting
- **Prettier 3.6.2** - Consistent code formatting
- **Structured Logger** - Production-ready logging system
- **Environment Configuration** - Flexible configuration via `.env` files
- **PWA Support** - Optional Progressive Web App capabilities

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Building the App](#building-the-app)
  - [Previewing the Build](#previewing-the-build)
- [Scripts](#scripts)
- [Lit Web Components](#lit-web-components)
- [Testing](#testing-vitest--testing-library)
- [PWA / Offline](#pwa--offline-optional)
- [Project Structure](#project-structure)
- [Path Aliases](#path-aliases)
- [Environment Variables](#environment-variables)
- [Logger](#logger)
- [Environment Types & Editor Support](#environment-types--editor-support)
- [Notes on Ports](#notes-on-ports)
- [License](#license)

## Overview

This repository showcases a **hybrid component architecture** combining React 19 and Lit 3 web components, built with the latest **Vite** and **Yarn 4**.  
It demonstrates best practices for integrating framework-specific React components with framework-agnostic Lit web components in a single application.

The project is optimized for modern development:

- ⚡ Fast dev server powered by Vite.
- 🧩 Hybrid architecture: React + Lit components working seamlessly together.
- 📦 Modern dependency management with Yarn 4.
- 🔒 Reproducible installs via `yarn.lock`.

## Getting Started

### Prerequisites

- **Node.js**: 24+ (LTS works too)
- **Yarn**: 4.9.4+

### Installation

```bash
yarn install
```

Copy `.env.example` to `.env` and configure your environment:

```bash
cp .env.example .env
```

### Running the App

```bash
yarn dev
```

Runs the Vite dev server (http://localhost:5173).

### Building the App

```bash
yarn build
```

Builds the production bundle into `/dist`.

### Previewing the Build

```bash
yarn preview
```

Serves the `/dist` folder locally (http://localhost:4173).

## 🎨 Customizing for Your Project

When using this template as a starter for your new project, follow this checklist:

### 1. **Project Identity**

#### Update package.json

```bash
# Edit package.json and update:
- "name": "your-project-name"
- "description": "Your project description"
- "version": "1.0.0"
- "author": "Your Name <your.email@example.com>"
- "homepage": "https://github.com/yourusername/your-project"
- "repository.url": "git+https://github.com/yourusername/your-project.git"
- "bugs.url": "https://github.com/yourusername/your-project/issues"
- "keywords": ["your", "keywords", "here"]
```

#### Update index.html

```html
<!-- Edit index.html: -->
<title>Your Project Name</title>
<meta name="description" content="Your project description for SEO" />
<meta name="apple-mobile-web-app-title" content="YourApp" />
```

#### Update App.tsx

```tsx
// Edit src/App.tsx:
<h1>Your Project Name</h1>
<p>Your tagline or description</p>
```

### 2. **PWA Configuration**

#### Update vite.config.ts

```typescript
VitePWA({
  manifest: {
    name: "Your Full App Name", // Full name
    short_name: "YourApp", // Short name (12 chars max)
    description: "Your app description", // Add description
    theme_color: "#your-color", // Your brand color
    background_color: "#ffffff",
    // Update when you have your own icons
  },
});
```

### 3. **Branding & Assets**

#### Replace Icons & Images

```bash
# Create and replace these files in public/:
public/
├── favicon.ico              # 16x16, 32x32, 48x48 (your favicon)
├── pwa-192x192.png         # 192x192 (Android home screen)
├── pwa-512x512.png         # 512x512 (Android splash screen)
└── (optional) apple-touch-icon.png  # 180x180 (iOS)

# Replace sample image:
src/assets/images/
└── sample.png              # Replace with your actual images
```

**Icon Generation Tools:**

- [Favicon.io](https://favicon.io/) - Generate favicon from text/image
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Comprehensive favicon generator
- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) - CLI tool for PWA icons

#### Update Theme Colors

```html
<!-- Edit index.html: -->
<meta name="theme-color" content="#your-light-color" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#your-dark-color" media="(prefers-color-scheme: dark)" />
```

```css
/* Edit src/index.css - update color variables */
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
}
```

### 4. **SEO & Deployment**

#### Update robots.txt

```txt
# Edit public/robots.txt when deploying:
User-agent: *
Allow: /

# Add your production sitemap:
Sitemap: https://yourdomain.com/sitemap.xml
```

#### Add Environment Variables

```bash
# Update .env and .env.example:
VITE_APP_NAME=Your App Name
VITE_API_URL=https://api.yourdomain.com
VITE_LOG_LEVEL=info
VITE_LOG_TIMESTAMP=true
```

### 5. **Git & Repository**

```bash
# Update remote repository:
git remote set-url origin https://github.com/yourusername/your-project.git

# Update LICENSE file if needed
# Update README.md with your project details
```

### 6. **Component Customization**

#### Remove Example Components (Optional)

If you don't need the example components:

```bash
# Remove example components:
rm src/components/SimpleGreeting.ts
rm src/components/ReactCounter.tsx
rm src/components/ReactCounter.module.css
rm src/components/LitComponents.tsx

# Update src/components/index.ts
# Update src/App.tsx to remove component usage
```

### 7. **Clean Up (Optional)**

```bash
# Remove sample assets if not needed:
rm src/assets/images/sample.png

# Remove example tests:
rm tests/App.test.tsx

# Create your own components and tests
```

### 8. **Verify Everything Works**

After customization, verify all systems:

```bash
# Install dependencies
yarn install

# Run type checking
yarn type-check

# Run linting
yarn lint:check

# Run formatting check
yarn format:check

# Run tests
yarn test:run

# Build for production
yarn build

# Preview production build
yarn preview
```

### Quick Checklist

- [ ] Updated `package.json` (name, description, author, repository)
- [ ] Updated `index.html` (title, description, app title)
- [ ] Updated `src/App.tsx` (project name and description)
- [ ] Updated `vite.config.ts` PWA manifest (name, short_name, theme)
- [ ] Replaced `public/favicon.ico` with your favicon
- [ ] Replaced `public/pwa-192x192.png` with your icon
- [ ] Replaced `public/pwa-512x512.png` with your icon
- [ ] Updated theme colors in `index.html`
- [ ] Updated `public/robots.txt` with your domain
- [ ] Updated `.env` and `.env.example` with your variables
- [ ] Updated git remote URL
- [ ] Removed example components (if not needed)
- [ ] Removed sample assets (if not needed)
- [ ] Ran all verification commands
- [ ] Updated this README with your project documentation

## 📝 Available Scripts

| Script               | Description                                     |
| -------------------- | ----------------------------------------------- |
| `yarn dev`           | Start development server with hot reload        |
| `yarn build`         | Build production bundle to `/dist`              |
| `yarn preview`       | Preview production build locally                |
| `yarn type-check`    | Check TypeScript types without compilation      |
| `yarn lint`          | Lint and auto-fix code with ESLint              |
| `yarn lint:check`    | Check for linting issues without fixing (CI/CD) |
| `yarn lint:fix`      | Lint and force fix all auto-fixable issues      |
| `yarn format`        | Format code with Prettier                       |
| `yarn format:check`  | Check if code is formatted correctly (CI/CD)    |
| `yarn test`          | Run tests in watch mode (Vitest)                |
| `yarn test:run`      | Run tests once (CI-friendly)                    |
| `yarn test:watch`    | Run tests in watch mode with UI                 |
| `yarn test:coverage` | Run tests with coverage report                  |
| `yarn test:ci`       | Run tests with coverage and verbose output      |

## � Lit Web Components

This project integrates **Lit** web components with React using **@lit-labs/react**, providing true Shadow DOM isolation and framework-agnostic components.

### Why Lit + React?

- **Framework Agnostic**: Lit components work in any framework or vanilla JS
- **Shadow DOM Isolation**: Styles are scoped and don't leak
- **Small Bundle Size**: Lit is lightweight (~5KB minified + gzipped)
- **Web Standards**: Built on native Custom Elements API
- **Type Safety**: Full TypeScript support with decorators
- **Interoperability**: Seamless React integration via @lit-labs/react

### Included Example Components

#### SimpleGreeting Component

A basic greeting component demonstrating property binding and styling:

```tsx
import { SimpleGreeting } from "@components";

function MyApp() {
  return <SimpleGreeting name='Developer' />;
}
```

**Features:**

- Shadow DOM with scoped styles
- Property binding with `@property` decorator
- Gradient background with custom styling

#### SimpleCounter Component

An interactive counter demonstrating state management and custom events:

```tsx
import { SimpleCounter } from "@components";

function MyApp() {
  const [count, setCount] = useState(0);

  const handleCountChanged = (event: Event) => {
    const customEvent = event as CustomEvent<{ count: number }>;
    setCount(customEvent.detail.count);
  };

  return <SimpleCounter count={count} onCountChanged={handleCountChanged} />;
}
```

**Features:**

- Interactive buttons (increment, decrement, reset)
- Custom events with `count-changed` event
- React state synchronization
- Styled with yellow gradient theme

### Creating New Lit Components

1. **Create the Lit component** in `src/components/`:

```typescript
// MyComponent.ts
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
export class MyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
    }
  `;

  @property({ type: String })
  message = "Hello";

  render() {
    return html`<p>${this.message}</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-component": MyComponent;
  }
}
```

2. **Create React wrapper** in `src/components/LitComponents.tsx`:

```typescript
import { createComponent } from "@lit/react";
import React from "react";
import { MyComponent as MyComponentWC } from "./MyComponent.js";

export const MyComponent = createComponent({
  tagName: "my-component",
  elementClass: MyComponentWC,
  react: React,
  events: {
    // Map custom events to React props
    onMyEvent: "my-event",
  },
});
```

3. **Export from index** in `src/components/index.ts`:

```typescript
export { MyComponent } from "./LitComponents";
export type { MyComponent as MyComponentElement } from "./MyComponent";
```

### TypeScript Configuration

Lit decorators require specific TypeScript settings (already configured):

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}
```

### Best Practices

- **Use Shadow DOM**: Leverage Lit's encapsulation for style isolation
- **Type Events**: Define custom event types for better React integration
- **Arrow Functions**: Use arrow functions for event handlers to avoid `this` binding issues
- **Small Components**: Keep components focused and composable
- **Test in Browser**: Lit components work best tested in actual browser environments

### Resources

- [Lit Documentation](https://lit.dev/)
- [Lit Labs React](https://github.com/lit/lit/tree/main/packages/labs/react)
- [Web Components Basics](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## �🧪 Testing

This project uses **Vitest** and **Testing Library** for comprehensive test coverage.

### Test Configuration

- **Test Runner**: Vitest 3.2.4 with jsdom environment
- **DOM Matchers**: @testing-library/jest-dom
- **Test Location**: `tests/` directory mirrors `src/` structure
- **Setup File**: `tests/setupTests.ts`
- **Coverage Provider**: v8 (fast native coverage)
- **Coverage Thresholds**: 80% for branches, functions, lines, and statements

### Coverage Exclusions

The following files are excluded from coverage reports:

- Entry points: `src/main.tsx`, `src/pwa.ts`
- Type definitions: `src/env.d.ts`, `src/vite-env.d.ts`, `src/**/*.d.ts`
- Test files: `tests/**`, `src/**/*.{test,spec}.{ts,tsx}`
- Type-only files: `src/types/**`
- Index files: `src/**/index.{ts,tsx}`

### Running Tests

```bash
# Run tests in watch mode
yarn test

# Run tests once (CI-friendly)
yarn test:run

# Run tests in watch mode with UI
yarn test:watch

# Generate coverage report
yarn test:coverage

# Run tests with coverage and verbose output (for CI)
yarn test:ci
```

### Writing Tests

Tests follow React Testing Library best practices:

```tsx
import { render, screen } from "@testing-library/react";
import MyComponent from "../src/components/MyComponent";

test("renders component correctly", () => {
  render(<MyComponent />);

  const element = screen.getByRole("button", { name: /click me/i });
  expect(element).toBeInTheDocument();
});
```

## PWA / Offline (optional)

This project includes Progressive Web App (PWA) support with comprehensive mobile optimization for both iOS and Android.

### PWA Features

- **Service Worker** - Offline functionality via Workbox
- **Web App Manifest** - Install prompt and app metadata
- **Icons** - Multiple sizes for different platforms
- **Theme Colors** - Adaptive browser chrome coloring
- **Mobile Optimization** - iOS and Android specific enhancements

### Assets in `public/`

- `favicon.ico` - Standard browser favicon
- `pwa-192x192.png` - PWA icon for mobile devices
- `pwa-512x512.png` - PWA icon for desktop/large displays
- `robots.txt` - Search engine crawling configuration

### Mobile Support

#### iOS (Safari)

- ✅ Add to Home Screen with custom icon
- ✅ Status bar styling in standalone mode
- ✅ Custom app title: "React+Lit"
- ✅ Theme color integration

#### Android (Chrome)

- ✅ Install prompt banner
- ✅ Custom themed browser chrome
- ✅ Auto-generated splash screen
- ✅ Standalone app mode
- ✅ Theme color (light/dark mode adaptive)

### Configuration

The PWA manifest is configured in `vite.config.ts`:

```typescript
VitePWA({
  registerType: "autoUpdate",
  manifest: {
    name: "Minimal React Project",
    short_name: "MinimalReact",
    icons: [
      { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
});
```

Mobile-specific meta tags are configured in `index.html`:

```html
<!-- Theme colors (adaptive to light/dark mode) -->
<meta name="theme-color" content="#646cff" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#535bf2" media="(prefers-color-scheme: dark)" />

<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-title" content="React+Lit" />
<link rel="apple-touch-icon" href="/pwa-192x192.png" />
```

### Enabling Service Worker

Enable the service worker by importing in `src/main.tsx`:

```ts
import "./pwa";
```

### Testing PWA Features

For offline testing, use a **production build**:

```bash
yarn build && yarn preview
```

Open DevTools → Application → Service Workers, then **Update** / **Skip waiting** to apply the latest SW.

### Testing Mobile Features

1. **iOS**: Use Safari on iPhone, tap Share → Add to Home Screen
2. **Android**: Open in Chrome, look for "Add to Home Screen" banner
3. **Desktop**: Chrome will show an install icon in the address bar

## Project Structure

```
minimal-react-project/
├── index.html                # Vite entry HTML with mobile meta tags
├── public/
│   ├── favicon.ico           # Browser favicon
│   ├── pwa-192x192.png       # PWA icon (mobile)
│   ├── pwa-512x512.png       # PWA icon (desktop)
│   └── robots.txt            # Search engine configuration
├── src/
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Global styles
│   ├── pwa.ts                # Service worker registration
│   ├── assets/
│   │   └── images/
│   │       └── sample.png
│   ├── components/
│   │   ├── SimpleGreeting.ts         # Lit web component
│   │   ├── ReactCounter.tsx          # Pure React component
│   │   ├── ReactCounter.module.css   # CSS Modules for React
│   │   ├── LitComponents.tsx         # React wrappers for Lit
│   │   └── index.ts                  # Barrel exports
│   ├── context/     (.gitkeep)
│   ├── hooks/       (.gitkeep)
│   ├── pages/       (.gitkeep)
│   ├── services/    (.gitkeep)
│   ├── styles/      (.gitkeep)
│   ├── types/       (.gitkeep)
│   └── utils/
│       ├── logger.ts
│       ├── logger.types.ts
│       └── index.ts                  # Barrel exports
├── tests/
│   ├── App.test.tsx
│   └── setupTests.ts
├── tsconfig.json
├── vite.config.ts
└── node_modules/     # Dependencies installed here
```

## Path Aliases

Configured in both **`tsconfig.json`** and **`vite.config.ts`**:

- `@components/*` → `src/components/*`
- `@utils/*` → `src/utils/*`
- plus: `@context`, `@hooks`, `@pages`, `@services`, `@styles`, `@types`

Example:

```ts
import Button from "@components/Button";
import { formatDate } from "@utils/date";
```

## Environment Variables

Environment variables are configured in `.env` file (copy from `.env.example`).

### Available Variables

**Build-time (Vite config only):**

- `NODE_ENV` - Environment mode (development/production)
- `PORT` - Dev server port (default: 5173)

**Runtime (Browser - VITE\_ prefix required):**

- `VITE_LOG_LEVEL` - Logging level (error/info/debug)
- `VITE_LOG_TIMESTAMP` - Enable timestamps in logs (true/false)

**Vite Built-in (always available in browser):**

- `import.meta.env.MODE` - Current mode (development/production)
- `import.meta.env.DEV` - Boolean, true in development
- `import.meta.env.PROD` - Boolean, true in production
- `import.meta.env.BASE_URL` - Base URL for the app

### Usage

```ts
// Direct access to environment variables
import.meta.env.MODE              // 'development' or 'production'
import.meta.env.DEV               // true/false
import.meta.env.VITE_LOG_LEVEL    // 'debug', 'info', etc.

// Using the logger (configured from env variables)
import { logger } from "@utils/logger";

function MyComponent() {
  logger.info('Component mounted');
  logger.debug('Debug information', { userId: 123 });
  logger.error('Something went wrong', { error: 'details' });

  // Create child logger with prefix
  const childLogger = logger.child('MyComponent');
  childLogger.info('This will be prefixed');

  return <div>Hello</div>;
}
```

**Note:** Only variables prefixed with `VITE_` are exposed to browser code. Variables like `NODE_ENV` and `PORT` are only available in `vite.config.ts`.

## 🎨 Code Quality & Formatting

### Linting with ESLint

This project uses **ESLint 9** with flat config for code quality and best practices.

```bash
# Run ESLint and auto-fix issues
yarn lint

# Check for linting issues without fixing (useful for CI/CD)
yarn lint:check

# Force fix all auto-fixable issues
yarn lint:fix
```

**ESLint Configuration:**

- TypeScript-aware linting with type checking
- React Hooks rules enforcement
- React Refresh rules for HMR compatibility
- JSX accessibility rules (a11y)
- Automatic import sorting
- Vitest-specific rules for test files

**Configuration file:** `eslint.config.mjs`

**Key Plugins:**

- `eslint-plugin-react-hooks` - React Hooks linting
- `eslint-plugin-react-refresh` - Fast Refresh compatibility
- `eslint-plugin-jsx-a11y` - Accessibility rules
- `eslint-plugin-simple-import-sort` - Automatic import organization
- `eslint-plugin-vitest` - Vitest-specific linting

### Formatting with Prettier

Code formatting is handled by **Prettier** (separate from linting).

```bash
# Format all files
yarn format

# Check if files are formatted correctly (useful for CI/CD)
yarn format:check
```

**Prettier Configuration:**

- 150 character line length
- 2 spaces indentation
- Semicolons enabled
- Single quotes for JSX
- ES5 trailing commas

**Configuration file:** `.prettierrc.json`

**Excluded paths:**

- `dist/`, `build/`, `coverage/`
- `node_modules/`
- `.yarn/` cache directories
- `.env` files

### VS Code Integration

Recommended VS Code extensions:

- **ESLint** (`dbaeumer.vscode-eslint`) - Linting support
- **Prettier** (`esbenp.prettier-vscode`) - Formatting support

Your `.vscode/settings.json` is already configured for:

- ✅ Format on save
- ✅ Auto-fix ESLint issues on save
- ✅ Consistent line endings (LF)
- ✅ TypeScript project references
- ✅ nvm support for correct Node.js version

### CI/CD Integration

Add to your CI pipeline:

```yaml
# Example GitHub Actions
- name: Check Formatting
  run: yarn format:check

- name: Lint Code
  run: yarn lint:check

- name: Type Check
  run: yarn type-check

- name: Run Tests
  run: yarn test:ci

- name: Build
  run: yarn build
```

## 🐛 Debugging

Use VS Code to debug your React application and tests.

### Available Debug Configurations

**Application Debugging:**

- **Debug React App** - Launch Chrome with dev server (requires `yarn dev` running first)

**Test Debugging:**

- **Debug Vitest Tests** - Debug all tests with breakpoints
- **Debug Current Test File** - Debug single test file

### How to Debug

**Debug React Application:**

1. Run `yarn dev` in a terminal
2. Wait for the server to start (you'll see "Local: <http://localhost:5173>")
3. Press `F5` or select "Debug React App" from the debug menu
4. Set breakpoints in your React code and they'll hit when you interact with the app

**Debug Tests:**

1. Open a test file or any file
2. Press `F5` and select "Debug Vitest Tests" or "Debug Current Test File"
3. Set breakpoints in your tests or source code
4. Tests will run with debugger attached

**VS Code Keyboard Shortcuts:**

| Action            | Shortcut    |
| ----------------- | ----------- |
| Start Debugging   | `F5`        |
| Stop Debugging    | `Shift+F5`  |
| Toggle Breakpoint | `F9`        |
| Step Over         | `F10`       |
| Step Into         | `F11`       |
| Step Out          | `Shift+F11` |

## Logger

A structured logger is included that automatically configures itself from environment variables.

### Features

- **Log Levels**: ERROR, INFO, DEBUG (configurable via `VITE_LOG_LEVEL`)
- **Timestamps**: Optional timestamps (controlled by `VITE_LOG_TIMESTAMP`)
- **Child Loggers**: Create prefixed loggers for different modules
- **Metadata**: Attach JSON objects to log entries

### Usage

```ts
import { logger } from "@utils/logger";

// Basic logging
logger.error("Error message", { error: "details" });
logger.info("Info message");
logger.debug("Debug info", { data: { foo: "bar" } });

// Child logger with prefix
const componentLogger = logger.child("MyComponent");
componentLogger.info("Component initialized");
```

### Configuration

Logger is configured from environment variables:

- `VITE_LOG_LEVEL`: `error`, `info`, or `debug` (default: `debug` in dev, `info` in prod)
- `VITE_LOG_TIMESTAMP`: `true` or `false` (default: `true`)

## Environment Types & Editor Support

- Global types: `tsconfig.json` includes `"types": ["vite/client", "vitest/globals", "node"]`.
- Test setup: `tests/setupTests.ts` imports `@testing-library/jest-dom`.
- VS Code: Standard TypeScript integration with node_modules.

## Notes on Ports

- **Dev**: `yarn dev` → <http://localhost:5173>
- **Preview**: `yarn preview` → <http://localhost:4173>  
  (Override in `vite.config.ts` via `server.port` / `preview.port` or set `PORT` in `.env`).

## ⚙️ Requirements

### Engine Requirements

- **Node.js**: `>=25.2.0` (Latest LTS)
- **Yarn**: `>=4.11.0` (Berry with node_modules)

### Version Management

If you need to manage multiple Node.js versions:

```bash
# Using nvm (Node Version Manager)
nvm install 25.2.0
nvm use 25.2.0

# Using fnm (Fast Node Manager)
fnm install 25.2.0
fnm use 25.2.0
```

**Note:** This project includes a `.nvmrc` file that specifies Node.js 25.2.0. If you use nvm, it will automatically use the correct version when you `cd` into the project directory (with nvm auto-use enabled).

## 📦 Dependencies

### Production Dependencies

- **react** `^19.2.0` - React library
- **react-dom** `^19.2.0` - React DOM renderer
- **lit** `^3.3.1` - Web Components library
- **workbox-window** `^7.3.0` - Service worker runtime (PWA)

### Development Dependencies

- **vite** `^7.1.10` - Build tool and dev server
- **typescript** `^5.9.3` - TypeScript compiler
- **@vitejs/plugin-react** `^5.0.4` - React Fast Refresh with Babel (supports decorators)
- **lit** `^3.3.1` - Web Components library
- **@lit-labs/react** `^2.1.3` - Lit-React interop wrapper
- **vitest** `^3.2.4` - Test framework
- **@vitest/coverage-v8** `3.2.4` - Coverage provider
- **@testing-library/react** `^16.3.0` - React testing utilities
- **@testing-library/jest-dom** `^6.9.1` - Custom jest matchers
- **eslint** `^9.37.0` - Linting (flat config)
- **typescript-eslint** `^8.46.1` - TypeScript ESLint support
- **prettier** `^3.6.2` - Code formatting
- **vite-plugin-pwa** `^1.1.0` - PWA support
- **jsdom** `^27.0.0` - DOM implementation for testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React and TypeScript best practices
- **Run linting:** `yarn lint` before committing
- **Format code:** `yarn format` to ensure consistent style
- **Type check:** `yarn type-check` to verify TypeScript types
- Write tests for new components
- Update documentation
- Use conventional commits
- Ensure build passes

### Code Quality Checklist

Before submitting a PR, ensure:

- [ ] Code passes linting (`yarn lint:check`)
- [ ] Code is formatted (`yarn format:check`)
- [ ] Types are valid (`yarn type-check`)
- [ ] Tests pass (`yarn test:ci`)
- [ ] Coverage thresholds met (80%)
- [ ] Documentation is updated
- [ ] Build succeeds (`yarn build`)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Review existing issues and discussions

### Built with ❤️ using React, TypeScript, and Vite
