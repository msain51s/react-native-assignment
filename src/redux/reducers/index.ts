import {combineReducers} from 'redux';
import listReducer from './reducer';

export const rootReducer = combineReducers({
  listSlice: listReducer,
});
