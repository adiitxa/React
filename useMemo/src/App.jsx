import React, { useState, useMemo } from "react";

export default function App() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");

  const slowDouble = useMemo(() => {
    console.log("Calculating slow double...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += number;
    }
    return result;
  }, [number]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>✅ useMemo Demo</h1>

      <label>
        Enter a number: <br />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          style={{ padding: "0.5rem", width: "200px" }}
        />
      </label>

      <p>🔢 Slow Double Result: {slowDouble}</p>

      <label>
        Enter your name (no delay expected): <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "0.5rem", width: "200px" }}
        />
      </label>

      <p>🙋 Hello, {name || "stranger"}!</p>
    </div>
  );
}
