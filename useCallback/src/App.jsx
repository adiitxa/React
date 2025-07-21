import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App
