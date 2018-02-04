import React from 'react';
import {connect} from 'react-redux';
import ReviewsIndex from './reviews_index';
import {requestAllReviews, deleteReview} from '../../actions/review';

const mapStateToProps = (state, ownProps) => {
  let reviews = Object.values(state.entities.reviews);
  let biz = state.entities.biz[ownProps.match.params.bizId];
  let currentUser = state.session.currentUser;
  return ({
    reviews,
    biz,
    currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllReviews: (bizId) => dispatch(requestAllReviews(bizId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);
