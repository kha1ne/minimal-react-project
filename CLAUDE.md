# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Task                    | Command                                          |
| ----------------------- | ------------------------------------------------ |
| Dev server              | `yarn dev`                                       |
| Build                   | `yarn build`                                     |
| Preview build           | `yarn preview`                                   |
| Lint                    | `yarn lint` (or `yarn lint:fix` to auto-fix)     |
| Format                  | `yarn format` (or `yarn format:check` to verify) |
| Type check              | `yarn type-check`                                |
| Run all tests           | `yarn test:run`                                  |
| Run tests in watch mode | `yarn test:watch`                                |
| Run a single test       | `yarn vitest run tests/App.test.tsx`             |
| Test coverage           | `yarn test:coverage`                             |

Package manager is **Yarn 4** (Berry) with `node-modules` linker. Use `yarn add` / `yarn add -D`, not npm.

## Architecture

This is a **React 19 + Lit web components** hybrid app built with Vite and TypeScript.

### Routing

React Router v7 with `createBrowserRouter`. Routes are defined in `src/App.tsx`. Layout with nav lives in `src/layouts/RootLayout.tsx`, pages in `src/pages/`. For tests, use `createMemoryRouter` instead of `createBrowserRouter` (see `tests/App.test.tsx` for the pattern).

### Lit-in-React pattern

Lit web components (defined in `src/components/*.ts` with `@customElement` decorator) are wrapped for React consumption using `@lit-labs/react`'s `createComponent` in `src/components/LitComponents.tsx`. React code imports the wrapped versions from `src/components/index.ts`, not the raw Lit classes. Example: `SimpleGreeting.ts` (Lit) -> `LitComponents.tsx` (React wrapper) -> `index.ts` (barrel export).

### Path aliases

Configured in both `tsconfig.json` and `vite.config.ts`: `@components/*`, `@context/*`, `@hooks/*`, `@layouts/*`, `@pages/*`, `@services/*`, `@styles/*`, `@types/*`, `@utils/*` — all resolve to `src/<folder>/*`.

### Testing

Vitest with jsdom environment. Setup file at `tests/setupTests.ts` imports `@testing-library/jest-dom`. Tests live in `tests/` or co-located as `*.test.{ts,tsx}` / `*.spec.{ts,tsx}` in `src/`. Coverage thresholds: 80% for branches, functions, lines, and statements.

### Code style

- ESLint flat config (`eslint.config.mjs`) with `typescript-eslint` type-checked rules, `react-hooks`, `react-refresh`, `jsx-a11y`, and `simple-import-sort`
- Prettier: 150 char line width, 2-space indent, trailing commas (es5), JSX single quotes, no arrow parens
- Imports must be sorted (enforced by `simple-import-sort` plugin)
- Max line length: 150 chars (URLs and strings exempt)
- Unused vars prefixed with `_` are allowed

### Environment variables

Browser-accessible env vars must be prefixed with `VITE_` (accessed via `import.meta.env.VITE_*`). See `.env.example` for available variables. `PORT` controls dev server port (default 5173).
