/* eslint-disable dot-notation */
// action types
import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
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
    user:{}
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

    default:
      return state;
  }
};

export default loginReducer;
