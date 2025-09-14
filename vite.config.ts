import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
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
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
    css: true,
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/env.d.ts", "src/main.tsx", "src/pwa.ts"],
    },
  },
});
