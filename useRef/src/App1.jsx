import { useState, useEffect, useRef } from 'react'

function App1() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count + 1);
  }

  //it runs on every render
  useEffect(() => {
    console.log("main ferse render hogya hu")
  })

  return (
    <div>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <br/>

      <div>
        Count: {count}
        value : {val.current}
      </div>
    </div>
  )
}

export default App1