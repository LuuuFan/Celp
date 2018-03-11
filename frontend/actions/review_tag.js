import * as APIUtilReviewTag from '../util/review_tag_util';
import {receiveReview} from './review';
import {receiveErrors} from './session';

export const createReviewTag = (reviewId, tag) => dispatch => APIUtilReviewTag.createReviewTag(reviewId, tag)
  .then(
    ()=>{
      return (
        payload => dispatch(receiveReview(payload)),
        errors => dispatch(receiveErrors(errors.responseJSON))
      )
    }
  );

export const deleteReviewTag = (reviewId, tag) => dispatch => APIUtilReviewTag.deleteReviewTag(reviewId, tag)
  .then(
    payload => dispatch(receiveReview(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
