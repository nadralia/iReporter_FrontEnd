import { combineReducers } from 'redux';
// import reducers
import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer';
const rootReducers = combineReducers({
  user: registerReducer,
  auth: loginReducer
  });
  
  export default rootReducers;
  