import React, { createContext, useState } from 'react';
import ChildA from './components/ChildA';
import "./styles/style.css"

export const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name: "Love"});
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor: theme === 'light' ? "beige" : "black"}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
