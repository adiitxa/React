import React, { useState, useEffect, useRef } from 'react';
import './style.css';

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  let btnRef = useRef();

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("main ferse render hogya hu");
  });

  function changeColor() {
    if (btnRef.current) { 
      btnRef.current.style.backgroundColor = "red";
    }
  }

  return (
    <div>
      <button
        ref={btnRef}
        onClick={handleIncrement}
      >
        Increment
      </button>
      <br />

      <button onClick={changeColor}>
        Change Color of 1st Button
      </button>
      <br />

      <div>
        Count: {count}
      </div>
    </div>
  );
}

export default App;