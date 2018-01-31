import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';
import errorsReducer from './errors';

const rootReducer = combineReducers({
  // entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});


export default rootReducer
