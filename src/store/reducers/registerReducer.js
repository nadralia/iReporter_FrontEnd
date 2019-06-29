// action types
import {
	REGISTRATION_SUCCESS,
	REGISTRATION_ERROR,
} from '../actionTypes/registerActionTypes';

/**
  * This is a function.
  * @param {object} - An object param*
  * @return {object}
  */

const initialState =
{
	isRegister: false,
	user: {},
	loading: false,
}

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTRATION_SUCCESS:
			return {
				...state,
				user: action.payload,
			};

		case REGISTRATION_ERROR:
			return {
				...state,
				signupError: action.payload,
			};

		case 'START_LOADING':
			return {
				...state,
				loading: true,
			};

		case 'STOP_LOADING':
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};

export default registerReducer;
