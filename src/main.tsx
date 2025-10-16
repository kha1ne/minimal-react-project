import "./pwa";
import "./index.css";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { logger } from "./utils/logger";

logger.info("Application starting", {
  mode: import.meta.env.MODE,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  baseUrl: import.meta.env.BASE_URL,
  logLevel: import.meta.env.VITE_LOG_LEVEL,
  logTimestamp: import.meta.env.VITE_LOG_TIMESTAMP,
});

const root = document.getElementById("root")!;

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
