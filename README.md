# Minimal React Project

A simple **Minimal React Project application** built with React and TypeScript. 
This project is intended to be a minimal barebone setup with essential dependencies for building and testing a React application using TypeScript.  

It is bootstrapped with Create React App and configured for **Yarn 4 (Berry)**.

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Building the App](#building-the-app)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## Overview
This repository contains a minimal React + TypeScript setup using the latest Yarn (v4).  
It’s intentionally barebones and serves as a starting point for step-by-step customization.  

The project includes configurations for testing with **Jest** and **Testing Library**, 
as well as Babel plugins for handling modern JavaScript features.

## Getting Started

### Prerequisites
- Node.js **18+** (recommended)
- Yarn **4.x** (Berry)

### Installation
```bash
yarn install
```

### Running the App
```bash
yarn start
```
This starts the development server at <http://localhost:3000>.

### Building the App
```bash
yarn build
```
Output is placed in the `/build` directory.

## Testing
```bash
yarn test
```
Runs tests with Jest and Testing Library.

## Project Structure
```
minimal-react-project/
├── public/         # Static assets
├── src/            # Application source code
│   ├── App.tsx
│   ├── index.tsx
│   └── setupTests.ts
├── package.json
├── tsconfig.json
└── .yarn/          # Yarn 4 files
```

## Scripts
- `yarn start` – Start dev server
- `yarn build` – Build for production
- `yarn test` – Run tests
- `yarn lint` – (optional) Run linter if configured

## License
See [LICENSE](./LICENSE) for details.
