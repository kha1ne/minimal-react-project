# Minimal React Project

A minimal React + TypeScript project using **Vite** and **Yarn 4 (Berry, PnP)**. It’s intentionally barebones and designed for step-by-step customization. Optional **PWA** support is included via `vite-plugin-pwa`. Unit tests use **Vitest** and **Testing Library**.

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
- [Environment Types & Editor Support](#environment-types--editor-support)
- [Notes on Ports](#notes-on-ports)
- [License](#license)

## Overview

This repository contains a minimal React + TypeScript setup using the latest **Vite** and **Yarn 4 (PnP mode)**.  
It’s intentionally barebones and serves as a starting point for step-by-step customization.

The project is optimized for modern development:

- ⚡ Fast dev server powered by Vite.
- 📦 Plug’n’Play dependency management with Yarn 4.
- 🔒 Reproducible installs via `yarn.lock` and `.pnp.cjs`.

## Getting Started

### Prerequisites

- **Node.js**: 24+ (LTS works too)
- **Yarn**: 4.9.4 (Berry, Plug’n’Play)

> Tip (VS Code + PnP):  
> Run `yarn dlx @yarnpkg/sdks vscode` once, and ensure your workspace uses `.yarn/sdks/typescript/lib`.

### Installation

```bash
yarn install
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
- Example tests live next to source files (e.g. `App.tsx` ↔ `App.test.tsx`).
- Coverage excludes:
  - `src/main.tsx`, `src/pwa.ts`
  - All root-level TS/TSX files: `src/*.{ts,tsx}`
  - (Optionally) `src/**/*.test.{ts,tsx}` and `src/setupTests.ts`

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
│   ├── App.test.tsx
│   ├── main.tsx
│   ├── main.test.tsx
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
│   └── utils/       (.gitkeep)
├── tsconfig.json
├── vite.config.ts
└── .yarn/            # Yarn 4 (PnP) – cache ignored, sdks/plugins committed
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

## Environment Types & Editor Support

- Global types: `tsconfig.json` includes `"types": ["vite/client", "vitest/globals", "node"]`.
- Test setup: `src/setupTests.ts` imports `@testing-library/jest-dom`.
- VS Code: `.yarn/sdks` is used for TypeScript; ensure workspace points there.

## Notes on Ports

- **Dev**: `yarn dev` → http://localhost:5173
- **Preview**: `yarn preview` → http://localhost:4173  
  (Override in `vite.config.ts` via `server.port` / `preview.port`).

## License

See [LICENSE](./LICENSE).
