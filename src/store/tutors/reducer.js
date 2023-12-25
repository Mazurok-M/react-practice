import { CREATE_TUTOR, LOAD_TUTORS } from "./actionsTypes";

const initialState = [];

const tutorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TUTORS:
      localStorage.setItem("tutors", JSON.stringify(action.payload));
      const getTutorsFromLocalStorage = JSON.parse(
        localStorage.getItem("tutors")
      );
      return getTutorsFromLocalStorage ? getTutorsFromLocalStorage : [];

    case CREATE_TUTOR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default tutorsReducer;
