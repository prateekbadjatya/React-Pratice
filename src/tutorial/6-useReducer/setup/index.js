import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// reducer function
import { reducer } from "./reducer";

const defaultState = {
  pepole: [],
  showModal: false,
  modalContent: ""
};

const Index = () => {
  // const [pepole, setPepole] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = e => {
    e.preventDefault();
    if (text) {
      dispatch({
        type: "ADD_ITEMS",
        data: { id: new Date().getTime().toString(), name: text }
      });
      setText("");
    }
  };

  const removePerson = id => {
    if (state.pepole.length) {
      dispatch({
        type: "REMOVE_ITEM",
        data: { id }
      });
    }
  };

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL"
    });
  };
  return (
    <>
      {state.showModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            onChange={e => {
              return setText(e.target.value);
            }}
            type="text"
            value={text}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.pepole.map(person => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              className="remove-btn"
              onClick={() => removePerson(person.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
