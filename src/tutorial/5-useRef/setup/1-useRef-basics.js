import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(refContainer.current.value);
    // console.log(divContainer);
  };

  useEffect(() => {
    refContainer.current.focus();
  });
  console.log(refContainer);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;
