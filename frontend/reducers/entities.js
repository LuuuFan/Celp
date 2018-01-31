import { combineReducers } from 'redux';
import bizReducer from './biz';

const entitiesReducer = combineReducers({
  biz: bizReducer
});

export default entitiesReducer;
