import { combineReducers } from 'redux';
import bizReducer from './biz';
import imgReducer from './img'

const entitiesReducer = combineReducers({
  biz: bizReducer,
  imgs: imgReducer
});

export default entitiesReducer;
