import {RECEIVE_ALL_BIZ, RECEIVE_BIZ} from '../actions/biz';

const bizReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_BIZ:
      return Object.assign({}, state, action.bizes);
    case RECEIVE_BIZ:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default bizReducer;
