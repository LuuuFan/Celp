import * as APIUtilReviewTag from '../util/review_tag_util';
import {receiveReview} from './review';
import {receiveErrors} from './session';

export const RECEIVE_REVIEW_TAG = 'RECEIVE_REVIEW_TAG'
export const REMOVE_REVIEW_TAG = 'REMOVE_REVIEW_TAG'

export const receiveReviewTag = (payload) => ({
  type: 'RECEIVE_REVIEW_TAG',
  review: payload.review
});

export const removeReviewTag = (payload) => ({
  type: 'REMOVE_REVIEW_TAG',
  review: payload.review
});

export const createReviewTag = (reviewId, tag) => dispatch => APIUtilReviewTag.createReviewTag(reviewId, tag)
  .then(
    payload => dispatch(receiveReviewTag(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const deleteReviewTag = (reviewId, tag) => dispatch => APIUtilReviewTag.deleteReviewTag(reviewId, tag)
  .then(
    payload => dispatch(removeReviewTag(payload))
  );
