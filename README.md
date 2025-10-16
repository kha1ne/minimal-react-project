# Minimal React Project

A minimalist, well-structured React + TypeScript project built with Vite, following modern development practices and clean architecture principles.

## 🚀 Features

- **React 19.2.0** - Latest React with modern hooks and concurrent features
- **TypeScript 5.9.3** - Type safety and modern JavaScript features
- **Vite 7.1.10** - Lightning-fast dev server and build tool
- **Node.js 24.10.0** - Latest LTS Node.js runtime
- **Yarn Berry 4.10.3** - Modern package management with node_modules
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

This repository contains a minimal React + TypeScript setup using the latest **Vite** and **Yarn 4**.  
It's intentionally barebones and serves as a starting point for step-by-step customization.

The project is optimized for modern development:

- ⚡ Fast dev server powered by Vite.
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

## 🧪 Testing

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

- Icons in `public/`: `pwa-192x192.png`, `pwa-512x512.png`, `favicon.ico`
- Minimal manifest configured in `vite.config.ts`
- Enable the service worker by importing once in `src/main.tsx`:

```ts
import "./pwa";
```

- For offline testing, use a **production build**:

```bash
yarn build && yarn preview
```

Open DevTools → Application → Service Workers, then **Update** / **Skip waiting** to apply the latest SW.

## Project Structure

```
minimal-react-project/
├── index.html                # Vite entry HTML (root, not /public)
├── public/
│   ├── favicon.ico
│   ├── pwa-192x192.png
│   └── pwa-512x512.png
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── pwa.ts                # (optional) SW registration
│   ├── assets/
│   │   └── images/
│   │       └── sample.png
│   ├── components/  (.gitkeep)
│   ├── context/     (.gitkeep)
│   ├── hooks/       (.gitkeep)
│   ├── pages/       (.gitkeep)
│   ├── services/    (.gitkeep)
│   ├── styles/      (.gitkeep)
│   ├── types/       (.gitkeep)
│   └── utils/
│       ├── logger.ts
│       └── logger.types.ts
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

- **Node.js**: `>=24.10.0` (Latest LTS)
- **Yarn**: `>=4.10.3` (Berry with node_modules)

### Version Management

If you need to manage multiple Node.js versions:

```bash
# Using nvm (Node Version Manager)
nvm install 24.10.0
nvm use 24.10.0

# Using fnm (Fast Node Manager)
fnm install 24.10.0
fnm use 24.10.0
```

**Note:** This project includes a `.nvmrc` file that specifies Node.js 24.10.0. If you use nvm, it will automatically use the correct version when you `cd` into the project directory (with nvm auto-use enabled).

## 📦 Dependencies

### Production Dependencies

- **react** `^19.2.0` - React library
- **react-dom** `^19.2.0` - React DOM renderer
- **workbox-window** `^7.3.0` - Service worker runtime (PWA)

### Development Dependencies

- **vite** `^7.1.10` - Build tool and dev server
- **typescript** `^5.9.3` - TypeScript compiler
- **@vitejs/plugin-react-swc** `^4.1.0` - React Fast Refresh with SWC
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
