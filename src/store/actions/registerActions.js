/* eslint-disable dot-notation */
// third party libraries
import { toast } from 'react-toastify';

// import axios instance
import axios from 'axios';

// action types
import {
REGISTRATION_ERROR,
} from '../actionTypes/registerActionTypes';


/**
 * This is a function which returns the signUPSuccess action
 * @param {object} - resp*
 * @return {object}
 */
const registerError = resp => ({
  type: REGISTRATION_ERROR,
  payload: resp,
});

/**
* action creator for update profile request that takes in profile object and username
* as parameters and dispatch as a function
* @param {string} username
* @param {object} profile user info
* using the put method of http we upload user info
*/
export const registerActionCreator = (userData, history) => dispatch => {
  axios
    .post('http://127.0.0.1:5000/api/v2/auth/signup', userData)
    .then((resp) => {
      setTimeout(()=>{
        toast.success(resp.data.data[0]['message']);
      }, 4000)
      history.push('/login')
    
    })
    .catch((error)=> {
      dispatch({type: 'STOP_LOADING'})
      return dispatch(registerError(error));
    });
};