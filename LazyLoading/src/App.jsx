import React, { useState, lazy, Suspense } from 'react';
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));


function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Hello from App</h1>
      <button onClick={() => setShow(true)}>Load Heavy Component</button>

      {show && (
        <Suspense fallback={<p>Loading component...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;
