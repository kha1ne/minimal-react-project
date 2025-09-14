import type { FC } from "react";
import sampleImage from "./assets/images/sample.png";

const App: FC = () => {
  return (
    <main>
      <h1>Minimal React Project</h1>
      <p>Vite + React + TypeScript — ready to build.</p>
      <img src={sampleImage} alt='Sample' />
    </main>
  );
};

export default App;
