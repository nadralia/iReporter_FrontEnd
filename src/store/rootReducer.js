import { combineReducers } from 'redux';
// import reducers
import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer';
import incidentReducer from './reducers/incidentReducer';

const rootReducers = combineReducers({
    user: registerReducer,
    auth: loginReducer,
    incident: incidentReducer
  });
  
  export default rootReducers;
  