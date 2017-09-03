import { combineReducers } from 'redux';
import hnReducer from './hnReducer';
import detailcomment from './detailcomment';

const rootReducer = combineReducers({
  hnReducer,
  detailcomment
});

export default rootReducer;
