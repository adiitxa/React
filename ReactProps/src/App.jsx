import React from 'react';
import './index.css';
import Greeting from './components/Greeting';

function App() {
    let name ="aditya"
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Greeting name={name} />
    </div>
  );
}

export default App;
