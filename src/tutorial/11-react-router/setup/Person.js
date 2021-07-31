import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  // console.log(useParams());
  const { id } = useParams();
  const [name, setName] = useState("default Name");

  useEffect(() => {
    const personName = data.find(p => {
      if (parseInt(id) === p.id) {
        return p;
      }
    });
    console.log("personName", personName);
    personName && setName(personName.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
