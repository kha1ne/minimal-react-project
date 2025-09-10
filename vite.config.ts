import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(rootDir, "src/components"),
      "@utils": resolve(rootDir, "src/utils")
    }
  }
});
