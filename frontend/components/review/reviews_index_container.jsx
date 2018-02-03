import React from 'react';
import {connect} from 'react-redux';
import ReviewsIndex from './reviews_index';
import {requestAllReviews} from '../../actions/review';

const mapStateToProps = (state, ownProps) => {
  let reviews = Object.values(state.entities.reviews);
  let currentUser = state.session.currentUser;
  return ({
    reviews,
    currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllReviews: (bizId) => dispatch(requestAllReviews(bizId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);
