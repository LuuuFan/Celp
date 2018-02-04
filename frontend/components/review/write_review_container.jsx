import React from 'react';
import {connect} from 'react-redux';
import WriteReview from './write_review';
import {createReview} from '../../actions/review';
import {requestBiz} from '../../actions/biz';

const mapStateToProps = (state, ownProps) => ({
  biz: state.entities.biz[ownProps.match.params.bizId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createReview: (bizId, review) => dispatch(createReview(bizId, review)),
  requestBiz: (bizId) => dispatch(requestBiz(bizId))

})

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview);
