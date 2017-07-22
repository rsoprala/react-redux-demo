import { combineReducers } from 'redux';

//Note: we are calling the alias courses and not courseReducer, this is because its going to be used as a name in the slice of the state.
//since reducer returns the new state, we will be using state.courses which is clearner than state.courseReducer
import courses from './courseReducer';

const rootReducer = combineReducers( {
  courses
});

export default rootReducer;
