import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//WHEN START CODESANDBOX AUTOMATICALLY SHOW
//NOW START //
//LETS GO

let count = 0;

function increase() {
  count++;
  ReactDOM.render(
    <div className="App">
      <h2>THINK WITH CODE</h2>
      <h1>{count}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>,
    document.getElementById("root")
  );
}

function decrease() {
  count--;
  ReactDOM.render(
    <div className="App">
      <h2>THINK WITH CODE</h2>
      <h1>{count}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <div className="App">
    <h2>THINK WITH CODE</h2>
    <h1>{count}</h1>

    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>,
  document.getElementById("root")
);

//THANKS FOR WATCHING
