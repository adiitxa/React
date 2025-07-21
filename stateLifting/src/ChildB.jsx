import React from 'react'

const ChildB = (props) => {
  return (
    <div>
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
         <p>(this renders from Parent)The name is : {props.name}</p>
    </div>
  )
}

export default ChildB