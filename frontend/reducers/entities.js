import { combineReducers } from 'redux';
import bizReducer from './biz';
import imgReducer from './img'
import reviewReducer from './review'

const entitiesReducer = combineReducers({
  biz: bizReducer,
  imgs: imgReducer,
  reviews: reviewReducer
});

export default entitiesReducer;
