import { GET_COURSE_BY_ID, GET_COURSES } from "./actionsTypes";

// Action to get all courses
export const getCourses = () => {
  return {
    type: GET_COURSES,
  };
};

// Action to get a course by ID
export const getCourseById = (id) => {
  return {
    type: GET_COURSE_BY_ID,
    payload: id,
  };
};
