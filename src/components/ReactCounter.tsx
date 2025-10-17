import type { FC } from "react";

import styles from "./ReactCounter.module.css";

interface ReactCounterProps {
  count: number;
  onCountChange: (count: number) => void;
}

/**
 * A pure React counter component.
 * Demonstrates standard React patterns without web components.
 */
export const ReactCounter: FC<ReactCounterProps> = ({ count, onCountChange }) => {
  const handleIncrement = () => {
    onCountChange(count + 1);
  };

  const handleDecrement = () => {
    onCountChange(count - 1);
  };

  const handleReset = () => {
    onCountChange(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>React Counter Component</div>
      <div className={styles.count}>{count}</div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={handleDecrement}>
          ➖
        </button>
        <button className={styles.button} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.button} onClick={handleIncrement}>
          ➕
        </button>
      </div>
    </div>
  );
};
