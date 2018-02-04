import { combineReducers } from 'redux';
import bizReducer from './biz';
import imgReducer from './img';
import reviewReducer from './review';
import userReducer from './user';

const entitiesReducer = combineReducers({
  biz: bizReducer,
  imgs: imgReducer,
  reviews: reviewReducer,
  users: userReducer
});

export default entitiesReducer;
