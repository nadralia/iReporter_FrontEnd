/* eslint-disable dot-notation */
// action types
import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT
} from '../actionTypes/loginActionTypes';

/**
  * This is a function.
  * @param {object} - An object param*
  * @return {object}
  */

const initialState = 
{ 
    loginSuccess: '', 
    loginError: '',
    token: '',
    user:{
      username: sessionStorage.getItem('username')
    }
}
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload.data[0]['message'],
        token: action.payload.data[0]['token'],
        user: action.payload.data[0]['user'],
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        
      };

      case LOG_OUT:
      return {
        user:{
          username:'',
        }

      }

    default:
      return state;
  }
};

export default loginReducer;
