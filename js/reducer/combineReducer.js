import {combineReducers} from 'redux';
import {dataReducer} from '../reducer/data-reducer/data-reducer.js';
// import {usersReducer} from './user/user-reducer';
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  // [NameSpace.USERS]: usersReducer,
});

