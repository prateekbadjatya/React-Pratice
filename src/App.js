import React from "react";
import Setup from "./tutorial/8-useContext/setup/1-context-api";

//usestate

/* 
component name must be upperCase
must be inthe function/component body
can not call conditionally
*/

// one of the most famous usecase of useRef is targeting the dom element
function App() {
  return (
    <div className="container">
      {/* <h2>Advanced React Tutorial </h2> */}
      <Setup />
    </div>
  );
}

export default App;
