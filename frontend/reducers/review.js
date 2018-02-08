import {RECEIVE_BIZ} from '../actions/biz';
import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review';
import {RECEIVE_USER} from '../actions/user';

const reviewReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_BIZ:
      if (action.payload.reviews) {
        return action.payload.reviews
      } else {
        return state
      }
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, action.reviews);
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return Object.assign({}, state, newState);
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_USER:
      return action.reviews;
    default:
      return state;
  }
};

export default reviewReducer;
