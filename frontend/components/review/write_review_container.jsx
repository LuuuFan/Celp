import React from 'react';
import {connect} from 'react-redux';
import WriteReview from './write_review';
import {createReview, updateReview, requestReview} from '../../actions/review';
import {requestBiz} from '../../actions/biz';
import {clearErrors} from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  let review = {body: '', rate: 0};
  if (ownProps.match.path == '/update_review/biz/:bizId') {
    review = Object.values(state.entities.reviews).find(el=>el.user_id === state.session.currentUser.id);
  }
  return ({
    biz: state.entities.biz[ownProps.match.params.bizId],
    review: review,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createReview: (bizId, review) => dispatch(createReview(bizId, review)),
    updateReview: (bizId, review) => dispatch(updateReview(bizId, review)),
    requestReview: (bizId) => dispatch(requestReview(bizId)),
    requestBiz: (bizId) => dispatch(requestBiz(bizId)),
    clearErrors: () => dispatch(clearErrors())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview);
