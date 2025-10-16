import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const port = parseInt(env.PORT || "5173", 10);

  return {
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico"],
        manifest: {
          name: "Minimal React Project",
          short_name: "MinimalReact",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#ffffff",
          icons: [
            { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
            { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
          ],
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,avif}"],
        },
      }),
    ],
    resolve: {
      alias: {
        "@components": resolve(__dirname, "src/components"),
        "@context": resolve(__dirname, "src/context"),
        "@hooks": resolve(__dirname, "src/hooks"),
        "@pages": resolve(__dirname, "src/pages"),
        "@services": resolve(__dirname, "src/services"),
        "@styles": resolve(__dirname, "src/styles"),
        "@types": resolve(__dirname, "src/types"),
        "@utils": resolve(__dirname, "src/utils"),
      },
    },
    server: {
      port,
      strictPort: false,
    },
    preview: {
      port: port + 1,
      strictPort: false,
    },
    test: {
      environment: "jsdom",
      setupFiles: "./tests/setupTests.ts",
      globals: true,
      css: true,
      include: ["tests/**/*.{test,spec}.{ts,tsx}", "src/**/*.{test,spec}.{ts,tsx}", "src/**/__tests__/**/*.{ts,tsx}"],
      coverage: {
        provider: "v8",
        reporter: ["text", "lcov", "html", "json-summary"],
        include: ["src/**/*.{ts,tsx}"],
        exclude: [
          "src/main.tsx",
          "src/pwa.ts",
          "src/env.d.ts",
          "src/vite-env.d.ts",
          "src/**/*.{test,spec}.{ts,tsx}",
          "tests/**",
          "src/**/*.d.ts",
          "src/types/**",
          "src/**/index.{ts,tsx}",
        ],
        thresholds: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  };
});
