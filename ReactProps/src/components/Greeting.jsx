import React from "react";
function Greeting(props) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h1 className="text-2xl font-bold text-blue-600">Hello, {props.name}</h1>
      <p className="text-gray-600">Welcome to the React</p>
    </div>
  );
}

export default Greeting;
