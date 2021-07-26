import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  const [isError, setIsError] = useState(false);
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || "Prateek"}</h1>
      <button
        className="btn"
        onClick={() => {
          return setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
      {/* {isError && <h1>Error...</h1>} */}
      {isError ? <h1>Error...</h1> : <h1>Hello World</h1>}
    </>
  );
};

export default ShortCircuit;
