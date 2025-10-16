import type { FC } from "react";
import { useEffect } from "react";

import sampleImage from "./assets/images/sample.png";
import { logger } from "./utils/logger";

const App: FC = () => {
  useEffect(() => {
    logger.info("App component mounted");
    logger.debug("Component initialized", { timestamp: new Date().toISOString() });

    return () => {
      logger.debug("App component will unmount");
    };
  }, []);

  return (
    <main>
      <h1>Minimal React Project</h1>
      <p>Vite + React + TypeScript — ready to build.</p>
      <img src={sampleImage} alt='Sample' />
    </main>
  );
};

export default App;
