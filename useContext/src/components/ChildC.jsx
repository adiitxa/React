import React, { useContext } from 'react';
import { ThemeContext } from '../App'; 

const ChildC = () => {
  // const user = useContext(UserContext); // This line is commented out in the image
  const {theme, setTheme} = useContext(ThemeContext);

  function handleClick() {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        Change Theme
      </button>
    </div>
  );
}

export default ChildC;