import {RECEIVE_BIZ} from '../actions/biz';


const userReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_BIZ:
      if (action.payload.users) {
        return action.payload.users
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default userReducer;
