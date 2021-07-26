import React, { useState } from "react";

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [pepole, setPepole] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    firstname &&
      email &&
      setPepole(pepole => {
        return [...pepole, { firstname, email }];
      });
    firstname && email && setEmail("");
    firstname && email && setFirstName("");
    // firstname && email && console.log(pepole);
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              onChange={e => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              type="text"
              value={firstname}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">EMAIL : </label>
            <input
              onChange={e => setEmail(e.target.value)}
              id="email"
              name="email"
              type="text"
              value={email}
            ></input>
          </div>
          <button type="submit">Add Person</button>
        </form>
        {pepole.map((person, index) => {
          return (
            <div className="item" key={index}>
              <h4>{person.firstname}</h4>
              <p>{person.email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
