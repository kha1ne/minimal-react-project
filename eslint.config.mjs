// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import vitest from "eslint-plugin-vitest";
import globals from "globals";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig } from "eslint/config";

export default defineConfig(
  // Application source files only
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    ignores: [".vscode/**", ".yarn/**", "coverage/**", "dist/**", "node_modules/**", "public/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: {
        projectService: true, // enables type-aware linting
      },
    },

    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
      "jsx-a11y": jsxA11y,
    },

    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],

    rules: {
      // --- React hygiene ---
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // --- Accessibility ---
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/no-autofocus": "warn",

      // --- Import sorting ---
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      // --- TS-aware unused vars & shadowing ---
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
    },
  },

  // Vitest test files
  {
    files: ["src/**/*.{test,spec}.{ts,tsx,js,jsx}"],
    plugins: { vitest },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        ...globals.vitest,
      },
    },
    rules: {
      "vitest/no-focused-tests": "error",
      "vitest/no-disabled-tests": "warn",
      "vitest/no-identical-title": "error",
    },
  }
);
