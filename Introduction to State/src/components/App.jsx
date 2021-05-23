import React from "react";

var isDone = false; /*This is the variable that we are tracking*/

const strikeThrough = {textDecoration: "line-through"}; /*Here we create a variable and we
assign it a js object*/

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? strikeThrough: null}>BUY MILK</p> 
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
