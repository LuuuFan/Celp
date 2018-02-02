import {RECEIVE_BIZ} from '../actions/biz';

const imgReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BIZ:
      if (action.payload.imgs) {
        return action.payload.imgs
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default imgReducer;
