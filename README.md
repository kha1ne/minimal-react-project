# Minimal React Project

A simple **Minimal React Project application** built with React and TypeScript.  
This project is intended to be a minimal barebone setup with essential dependencies for building and testing a React application using TypeScript.

It is bootstrapped with **Vite** and configured for **Yarn 4 (Berry, Plug’n’Play)**.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Building the App](#building-the-app)
  - [Previewing the Build](#previewing-the-build)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [CRA vs Vite Scripts](#cra-vs-vite-scripts)
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

Ensure you have the following installed:

- Node.js **24+** (recommended)
- Yarn **4.x** (Berry, PnP)

### Installation

```bash
yarn install
```

### Running the App

```bash
yarn dev
```

This starts the Vite development server at <http://localhost:5173>.

### Building the App

```bash
yarn build
```

Output is placed in the `/dist` directory.

### Previewing the Build

```bash
yarn preview
```

This serves the production build locally for testing.

## Scripts

- `yarn dev` – Start the development server
- `yarn build` – Build for production (output in `/dist`)
- `yarn preview` – Preview the production build locally

## Project Structure

```
minimal-react-project/
├── public/             # Static assets
├── src/                # Application source code
│   ├── components/     # React components
│   ├── __tests__/      # Test files (optional if added later)
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point for React (Vite)
│   └── setupTests.ts   # Jest setup file (if tests added)
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── .yarn/              # Yarn 4 files
```

## License

See [LICENSE](./LICENSE) for details.
