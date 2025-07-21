import React from "react";

const Logger = React.memo(({ onLog }) => {
  console.log("Logger component rendered 🔁");

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={onLog}>Log Current Count</button>
    </div>
  );
});

export default Logger;
