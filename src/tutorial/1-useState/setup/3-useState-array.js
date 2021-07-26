import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPepole] = useState(data);

  const removeItem = id => {
    setPepole(people.filter(people => people.id !== id));
  };
  return (
    <>
      {people.map(person => (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => removeItem(person.id)}>Remove</button>
        </div>
      ))}
      <button className="btn" onClick={() => setPepole([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
