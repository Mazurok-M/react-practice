import { getTutors, postTutor } from "components/Api/defaultApi";
import * as types from "./actionsTypes.js";

// import {LOAD_TUTORS, CREATE_TUTOR} from './actionsTypes'

export const loadTutorsAction = () => (dispatch) => {
  getTutors().then((res) =>
    dispatch({ type: types.LOAD_TUTORS, payload: res.data })
  );
};

export const createTeacherAction = (data) => (dispatch) => {
  postTutor(data).then((res) => {
    if (res.data) {
      dispatch({ type: types.CREATE_TUTOR, payload: res.data });
    }
  });
};
