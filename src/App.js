import React, { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0); //Always they work in function

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1> {count} </h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

//SET COUNT USED FOR UPGRADING
//USESTATE IS  INTIAL STATE

// THANKS FOR WATCHING  //

//PLEASE lIKE SUBSCRIBE
