import { combineReducers } from 'redux';
import user from './user';
import animals from './animals';

const rootReducer = combineReducers({
  user,
  animals
});

export default rootReducer;
