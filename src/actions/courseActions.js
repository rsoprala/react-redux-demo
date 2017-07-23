import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  //debugger;
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

//this is a thunk
export function loadCourses() {
  return function(dispatch) {
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  }
}
