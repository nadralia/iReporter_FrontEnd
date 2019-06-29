import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './rootReducer';

const initialState = {};
const middleware = [thunk];
const enhancers = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(reducer, initialState, enhancers);

export default store;