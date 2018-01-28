import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';

const _nullSession = {currentUser: null};

const sessionReducer = (state=_nullSession, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = {currentUser: action.currentUser};
      return Object.assign({}, newState);

    case LOGOUT_CURRENT_USER:
      return _nullSession;

    default:
      return state;
  };
};

export default sessionReducer;
