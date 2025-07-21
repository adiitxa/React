import { useState } from 'react';

export default function App() {
  const [toyCount, setToyCount] = useState(5);
  
  return (
    <div>
      <p>You have {toyCount} toys in your box</p>
      <button onClick={() => setToyCount(toyCount + 1)}>
        Add a toy!
      </button>
      <br />
      <br />
      <button onClick={() => setToyCount(toyCount - 1)}>
        Remove a toy
      </button>
    </div>
  );
}