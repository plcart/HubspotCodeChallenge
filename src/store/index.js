import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import api from './middlewares/api';
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk, api));