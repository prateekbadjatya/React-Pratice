import React, { useState, useEffect } from "react";

// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [counter, setCouter] = useState(0); // optional array here is list of dependency // if empty array is pass it will run only once intially render // if empty array does not pass it will run on every render

  // we can not hooks conditionally
  /*  if (counter > 0) {
     useEffect(() => {
       console.log("useEffect call");
       document.title = `New Messages(${counter})`; // set the title of our aplication
     });
  } */

  /* useEffect(() => {
    console.log("useEffect call");
    if (counter >= 1) {
      document.title = `New Messages(${counter})`; // set the title of our aplication
    }
  }, []); */ useEffect(() => {
    console.log("useEffect call");
    if (counter >= 1) {
      document.title = `New Messages(${counter})`; // set the title of our aplication
    }
  }, [counter]); // run if dependecy list pass in aaray state change

  useEffect(() => {
    console.log("useEffect call2");
  }); // run on every render

  useEffect(() => {
    console.log("useEffect empty array");
  }, []); // render only once
  return (
    <>
      <h2>{counter}</h2>
      <button
        className="btn"
        onClick={() => {
          setCouter(prev => prev + 1);
        }}
      >
        Counter
      </button>
    </>
  );
};

export default UseEffectBasics;
