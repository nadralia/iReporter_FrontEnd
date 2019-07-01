// import axios instance
import axiosinstance from '../../utils/axiosMain';
import axios from 'axios';
import { toast } from 'react-toastify';



import {
    GET_INCIDENT_SUCCESS,
    GET_INCIDENT_ERROR,
    GET_INCIDENTS_SUCCESS,
    GET_INCIDENTS_ERROR,
    CREATE_INCIDENT_SUCCESS,
    CREATE_INCIDENT_ERROR,
  } from '../actionTypes/incidentActionTypes';


  const createIncidentSuccess = incidentData => ({
    type: CREATE_INCIDENT_SUCCESS,
    incidentData,
  });

  const createIncidentError = error => ({
    type: CREATE_INCIDENT_ERROR,
    error
  });
  
  const getIncidentSuccess = incidentData => ({
    type: GET_INCIDENT_SUCCESS,
    incidentData,
  });

  const getIncidentError = error => ({
    type: GET_INCIDENT_ERROR,
    error
  });
  
  
  const getAllIncidentsSuccess = incidentData => ({
    type: GET_INCIDENTS_SUCCESS,
    incidentData,
  });
  
  const getAllIncidentsError = incidentData => ({
    type: GET_INCIDENTS_ERROR,
    incidentData,
  });
  


/**
* action creator function for getting an incident request that takes
* incidentID as a parameter
* @param {string} incidentID
*/

const url = 'https://dbireporter.herokuapp.com/api/v2/incidents';

export const axiosIncidentConfig = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
  }
};

export const createIncidentRequest = (incidentData, history) => (dispatch) => {
  return axios
    .post(url,incidentData, axiosIncidentConfig)
    .then((response) => {
      setTimeout(()=>{
        toast.success(response.data.message);
      }, 4000)
      dispatch(createIncidentSuccess(response.data));
      history.push('/incident/reports')
    })
    .catch(error => dispatch(createIncidentError(error)));

}
  

  
/**
* action creator function for getting an incident request that takes
* incidentID as a parameter
* @param {string} incidentID
*/
export const fetchIncidentRequest = incidentID => dispatch => axiosinstance
  .get(`/incidents/${incidentID }`)
  .then((response) => {
    dispatch(getIncidentSuccess(response.data.incident_details))
  })
  .catch(error => dispatch(getIncidentError(error)));

/**
* action creator function for getting all incident request that takes
* @param {string} username
*/
export const fetchAllIncidentRequest = () => dispatch => axiosinstance
  .get(`/incidents`)
  .then((response) => {
    dispatch(getAllIncidentsSuccess(response.data))
  })
  .catch((error)=> {
    dispatch(getAllIncidentsError(error.response.data.message))
  });