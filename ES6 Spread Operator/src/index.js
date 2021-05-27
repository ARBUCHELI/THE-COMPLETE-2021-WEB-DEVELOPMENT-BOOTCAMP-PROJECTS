import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const fullName = {
  fName:"James",
  lName: "Bond"
}

const user = {
  fullName,
  id: 1,
  userName: "jamesbond007"
}

console.log(user);