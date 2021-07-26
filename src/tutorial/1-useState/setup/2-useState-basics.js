import React, { useState } from "react";

//useState - function , name Import

const UseStateBasics = () => {
  // console.log(useState);
  // console.log(useState("Hello World"));
  // const value = useState("Hello World")[0];
  // const fn = useState("Hello World")[1];
  // console.log(value); // Hello World
  // console.log(fn);

  // using array destructring we do above things in one line
  const [text, setText] = useState("Hello World");
  const handleClick = () => {
    text === "Hello Pepole" ? setText("Hello World") : setText("Hello Pepole");
  };
  return (
    <React.Fragment>
      <h2>useState basic example</h2>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
