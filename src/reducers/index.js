import {combineReducers} from 'redux';
import authReducer from './authReducer';
import deviceReducer from './deviceReducer';
import notifyReducer from './notifyReducer';


const reducers = combineReducers({
  auth:authReducer,
  device:deviceReducer,
  notify:notifyReducer,
});

export default reducers;