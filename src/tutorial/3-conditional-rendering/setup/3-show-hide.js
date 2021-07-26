import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);
  const [size, setSize] = useState(window.innerWidth);

  const getSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, []);
  return (
    <>
      {show && <Item size={size} />}
      <button className="btn" onClick={() => setShow(!show)}>
        {!show ? "Show" : "Hide"}
      </button>
    </>
  );
};

const Item = ({ size }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>{size} px</h2>
    </div>
  );
};

export default ShowHide;
