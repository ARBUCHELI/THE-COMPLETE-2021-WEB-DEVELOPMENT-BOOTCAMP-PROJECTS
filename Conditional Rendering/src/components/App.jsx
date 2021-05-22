import React from "react";
import Login from "./login";

var isLoggedIn = false;

//const currentTime = new Date(2021, 5, 22, 13).getHours();
   
function App() {
  return (
    <div className="container"> 
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*{currentTime > 12 && <h1>Hey bro, why are you still working!</h1>}*/}
    </div>
  );
}

export default App;
