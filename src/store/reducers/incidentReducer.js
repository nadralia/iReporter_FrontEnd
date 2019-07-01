// action types
import {
    GET_INCIDENT_SUCCESS,
    GET_INCIDENT_ERROR,
    GET_INCIDENTS_SUCCESS,
    GET_INCIDENTS_ERROR,
    CREATE_INCIDENT_SUCCESS,
    CREATE_INCIDENT_ERROR,
  } from '../actionTypes/incidentActionTypes';

/**
  * This is a function.
  * @param {object} - An object param*
  * @return {object}
  */

const initialState = 
{ 
    message: '',
    error: {},
    incident:{},
    available_incidents: [],
}
const incidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INCIDENT_SUCCESS:
    return {
      ...state,
      incident: action.incident,
      message: action.message,
    };

  case CREATE_INCIDENT_ERROR:
    return {
      ...state,
      error: action.error,
      message: '',
    };
    case GET_INCIDENT_SUCCESS:
      return {
        ...state,
        message: '',
        incident: action.incidentData,
      };

    case GET_INCIDENT_ERROR:
      return {
        ...state,
        error: action.error,
      };
      case GET_INCIDENTS_SUCCESS:
      return {
        ...state,
        message: '',
        available_incidents: action.incidentData.available_incidents,
      };

    case GET_INCIDENTS_ERROR:
      return {
        ...state,
        error: action.incidentData,
      };

    default:
      return state;
  }
};

export default incidentReducer;
