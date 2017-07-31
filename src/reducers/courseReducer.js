import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      //Note: you cannot just add to the state here, since state is immutable
      debugger;
      return [
        ...state, Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      //Note: we are spreading all array values except the one that is updated, and then include the updated course
      return [
        ...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
