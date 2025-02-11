import { courses } from "../data/data";
import { GET_COURSE_BY_ID, GET_COURSES } from "./actionsTypes";

// src/redux/reducer.js
const initialState = {
  courses: courses, // Example initial state
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: [...state.courses], // Return the list of courses
      };

    case GET_COURSE_BY_ID:
      return {
        ...state,
        courseDetail:
          state.courses.find((course) => course.id === action.payload) || null,
      };

    default:
      return state;
  }
};

export default courseReducer;
