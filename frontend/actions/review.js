import * as APIUtilReview from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = (payload) => ({
  type: REMOVE_REVIEW,
  reviewId: payload.review.id,
  biz: payload.biz
});

export const createReview = (bizId, review) => dispatch => APIUtilReview.createReview(bizId, review)
  .then(
    review => dispatch(receiveReview(review))
  );

export const requestAllReviews = bizId => dispatch => APIUtilReview.requestAllReviews(bizId)
  .then(
    reviews => dispatch(receiveAllReviews(reviews))
  );

export const requestReview = reviewId => dispatch => APIUtilReview.requestReview(reviewId)
  .then(
    review => dispatch(receiveReview(review))
  );

export const updateReview = review => dispatch => APIUtilReview.updateReview(review)
  .then(
    review => dispatch(receiveReview(review))
  );

export const deleteReview = reviewId => dispatch => APIUtilReview.deleteReview(reviewId)
  .then(
    payload => dispatch(removeReview(payload))
  );
