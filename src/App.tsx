import type { FC } from "react";
import { useEffect, useState } from "react";

import sampleImage from "./assets/images/sample.png";
import { ReactCounter, SimpleGreeting } from "./components";
import { logger } from "./utils";

const App: FC = () => {
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    logger.info("App component mounted");
    logger.debug("Component initialized", { timestamp: new Date().toISOString() });

    return () => {
      logger.debug("App component will unmount");
    };
  }, []);

  const handleCountChange = (newCount: number) => {
    setCounterValue(newCount);
    logger.info("Counter value changed", { count: newCount });
  };

  return (
    <main>
      <h1>Minimal React Project</h1>
      <p>React 19 + Lit + TypeScript + Vite — A hybrid component starter.</p>
      <img src={sampleImage} alt='Sample' />

      <section style={{ marginTop: "2rem" }}>
        <h2>Component Examples</h2>
        <p>
          Below is a <strong>Lit web component</strong> (with Shadow DOM) and a <strong>pure React component</strong>:
        </p>

        <SimpleGreeting name='React Developer' />

        <ReactCounter count={counterValue} onCountChange={handleCountChange} />

        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
          Current counter value in React state: <strong>{counterValue}</strong>
        </p>
      </section>
    </main>
  );
};

export default App;
