import * as APIUtilReview from '../util/review_util';
import {receiveErrors} from './session';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveReview = (payload) => ({
  type: RECEIVE_REVIEW,
  review: payload.review,
  biz: payload.biz
});

export const removeReview = (payload) => ({
  type: REMOVE_REVIEW,
  reviewId: payload.review.id,
  biz: payload.biz
});

export const createReview = (bizId, review) => dispatch => APIUtilReview.createReview(bizId, review)
  .then(
    payload => dispatch(receiveReview(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const requestAllReviews = bizId => dispatch => APIUtilReview.requestAllReviews(bizId)
  .then(
    reviews => dispatch(receiveAllReviews(reviews))
  );

export const requestReview = bizId => dispatch => APIUtilReview.requestReview(bizId)
  .then(
    payload => dispatch(receiveReview(payload))
  );

export const updateReview = (bizId, review) => dispatch => APIUtilReview.updateReview(bizId, review)
  .then(
    payload => dispatch(receiveReview(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const deleteReview = reviewId => dispatch => APIUtilReview.deleteReview(reviewId)
  .then(
    payload => dispatch(removeReview(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
