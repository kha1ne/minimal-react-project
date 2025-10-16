# Minimal React Project

A minimal React + TypeScript project using **Vite** and **Yarn 4**. It's intentionally barebones and designed for step-by-step customization. Optional **PWA** support is included via `vite-plugin-pwa`. Unit tests use **Vitest** and **Testing Library**.

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

## Scripts

- `yarn dev` – Vite dev server (hot reload)
- `yarn build` – Production build to `/dist`
- `yarn preview` – Serves `/dist` locally for verification
- `yarn test` – Run tests in watch mode (Vitest)
- `yarn test:run` – Run tests once (CI-friendly)
- `yarn test:coverage` – Run tests with coverage

## Testing (Vitest + Testing Library)

- Test runner: **Vitest** (jsdom env)
- DOM matchers: **@testing-library/jest-dom**
- Tests are organized in `tests/` directory, mirroring `src/` structure
- Test setup file: `tests/setupTests.ts`
- Coverage excludes:
  - `src/main.tsx`, `src/pwa.ts`
  - All root-level TS/TSX files: `src/*.{ts,tsx}`
  - Entire `tests/` directory

Run:

```bash
yarn test
yarn test:coverage
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

- **Dev**: `yarn dev` → http://localhost:5173
- **Preview**: `yarn preview` → http://localhost:4173  
  (Override in `vite.config.ts` via `server.port` / `preview.port`).

## License

See [LICENSE](./LICENSE).
