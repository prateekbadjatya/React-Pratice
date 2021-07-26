import { data } from "../../../data";
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS": {
      return {
        ...state,
        showModal: true,
        pepole: [...data, { ...action.data }],
        modalContent: "Item Added"
      };
    }
    case "REMOVE_ITEM": {
      let result = [...state.pepole];
      const pepole = result.filter(person => person.id !== action.data.id);
      return {
        ...state,
        pepole,
        showModal: true,
        modalContent: "Item Removed"
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        showModal: false,
        modalContent: ""
      };
    }
    default:
      return { ...state };
  }
};
