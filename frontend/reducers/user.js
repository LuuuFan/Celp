import {RECEIVE_BIZ} from '../actions/biz';
import {RECEIVE_USER} from '../actions/user';

const userReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_BIZ:
      if (action.payload.users) {
        return action.payload.users;
      } else {
        return state;
      }
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
