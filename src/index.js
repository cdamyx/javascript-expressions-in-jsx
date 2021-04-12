import React from "react";
import ReactDOM from "react-dom";

const fname = "Steve";
const lname = "Saddler";
const lucky = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
