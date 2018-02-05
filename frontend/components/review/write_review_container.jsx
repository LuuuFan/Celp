import React from 'react';
import {connect} from 'react-redux';
import WriteReview from './write_review';
import {createReview, updateReview, requestReview} from '../../actions/review';
import {requestBiz} from '../../actions/biz';

const mapStateToProps = (state, ownProps) => {
  let review = {body:'', rate: 0};
  if (condition) {
    review = state.entities.reviews[ownProps.match]
  }
  return ({
    biz: state.entities.biz[ownProps.match.params.bizId]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    requestReview: (reviewId) => dispatch(requestReview(reviewId)),
    updateReview: (review) => dispatch(updateReview(review)),
    createReview: (bizId, review) => dispatch(createReview(bizId, review)),
    requestBiz: (bizId) => dispatch(requestBiz(bizId))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview);
