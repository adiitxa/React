import { useState } from "react";
import ChildB from "./ChildB";

function App() {
  const [name, setName] = useState();
  return (
    <div>
    <ChildB name={name} setName={setName}/>
    <p>(this renders from Childern)The name is : {name}</p>
    </div>
  )
}

export default App