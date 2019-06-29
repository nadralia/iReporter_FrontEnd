/* eslint-disable dot-notation */
// import axios instance
import axios from 'axios';

// action types
import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from '../actionTypes/loginActionTypes';
import { toast } from 'react-toastify';



/**
 * This is a function which returns the signUPSuccess action
 * @param {object} - resp*
 * @return {object}
 */
const loginSuccess = resp => ({
    type: LOGIN_SUCCESS,
    payload: resp,
  });
/**
 * This is a function which returns the signUPSuccess action
 * @param {object} - resp*
 * @return {object}
 */
const loginError = resp => ({
  type: LOGIN_ERROR,
  payload: resp,
});

/**
* action creator for update profile request that takes in profile object and username
* as parameters and dispatch as a function
* @param {string} username
* @param {object} profile user info
* using the put method of http we upload user info
*/
export const loginActionCreator = (loginData) => dispatch => {
  axios
    .post('http://127.0.0.1:5000/api/v2/auth/login', loginData)
    .then((response) => {
        toast.success(response.data.data[0]['message']);
        dispatch(loginSuccess(response.data));
    })
    .catch((error)=> {
      return dispatch(loginError(error));
    });
};