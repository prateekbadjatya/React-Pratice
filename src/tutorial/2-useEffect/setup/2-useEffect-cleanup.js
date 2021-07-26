import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("hiiiiiiiiiiiiiiii");
    window.addEventListener("resize", checkSize); // once it enent listner intialiozae it will automatically call after every time screen size change
    // that why we have to remove listner oncve their use was complete
    return () => {
      console.log("clean up");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return (
    <>
      <h1>Window Size </h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
