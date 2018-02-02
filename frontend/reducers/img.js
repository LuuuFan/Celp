import {RECEIVE_BIZ} from '../actions/biz';
import {RECEIVE_ALL_IMG, RECEIVE_IMG, REMOVE_IMG} from '../actions/img'

const imgReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_BIZ:
      if (action.payload.imgs) {
        return action.payload.imgs
      } else {
        return state;
      }
    case RECEIVE_ALL_IMG:
      return Object.assign({}, state, action.imgs);
    case RECEIVE_IMG:
      newState[action.img.id] = action.img
      return Object.assign({}, state, newState);
    case REMOVE_IMG:
      newState = Object.assign({}, state);
      delete newState[action.imgId];
      return newState;
    default:
      return state;
  }
};

export default imgReducer;
