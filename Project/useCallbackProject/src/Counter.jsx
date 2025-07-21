import React, { useState, useCallback } from "react";
import Logger from "./Logger";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const logMessage = useCallback(() => {
    console.log(`Current Count is: ${count}`);
  }, [count]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>

      <Logger onLog={logMessage} />
    </div>
  );
}
