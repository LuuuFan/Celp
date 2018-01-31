import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session';

const errorsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default errorsReducer;
