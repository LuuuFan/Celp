import {RECEIVE_ALL_BIZ, RECEIVE_BIZ} from '../actions/biz';
import {REMOVE_REVIEW, RECEIVE_REVIEW} from '../actions/review';
import {RECEIVE_BOOKMARK, REMOVE_BOOKMARK} from '../actions/bookmark';

const bizReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_BIZ:
      return action.bizes;
    case RECEIVE_BIZ:
      newState = Object.assign({}, state);
      newState[action.payload.biz.id] = action.payload.biz;
      return Object.assign({}, state, newState);
    case RECEIVE_REVIEW:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return newState;
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return newState;
    case RECEIVE_BOOKMARK:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return newState;
    case REMOVE_BOOKMARK:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return newState;
    default:
      return state;
  }
};

export default bizReducer;
