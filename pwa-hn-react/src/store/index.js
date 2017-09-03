import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import hnReducer from '../reducers';

const middleware = applyMiddleware(thunk);
const store = createStore(hnReducer, middleware);

export default store;
