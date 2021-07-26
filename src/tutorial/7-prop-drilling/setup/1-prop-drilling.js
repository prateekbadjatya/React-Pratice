import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

// passing unnnessecary props to compoenent that was not useful for that compoent
// here removePersonis not useful for list
// here it is useful fot single person component
const List = ({ pepole, removePerson }) => {
  return (
    <>
      {pepole.map(person => (
        <SinglePerson removePerson={removePerson} key={person.id} {...person} />
      ))}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  // let { id, name } = person;
  console.log("nbame", id, name);
  return (
    <div key={id} className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};
const PropDrilling = () => {
  const [pepole, setPepole] = useState(data);
  const removePerson = id => {
    setPepole(p => {
      return p.filter(person => person.id !== id);
    });
  };
  return (
    <section>
      <h3>Props Drilling</h3>
      <List pepole={pepole} removePerson={removePerson} />
    </section>
  );
};

export default PropDrilling;
