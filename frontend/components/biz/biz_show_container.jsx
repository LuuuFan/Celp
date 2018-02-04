import React from 'react';
import {connect} from 'react-redux';
import BizShow from './biz_show';
import {requestBiz} from '../../actions/biz';
import {withRouter} from 'react-router-dom';
import {deleteReview} from '../../actions/review';

const mapStateToProps = (state, ownProps) => {
  let biz = state.entities.biz[ownProps.match.params.bizId];
  let imgs = [];
  if (biz && biz.img_ids) {
    imgs = biz.img_ids.map(id=>state.entities.imgs[id]);
  }
  let reviews= [];
  let users = [];
  if (biz && biz.review_ids) {
    reviews = biz.review_ids.map(id=>state.entities.reviews[id]);
    users = state.entities.users;
  }
  let currentUser = state.session.currentUser;
  return ({
    biz,
    imgs,
    reviews,
    users,
    currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    requestBiz: (bizId) => dispatch(requestBiz(bizId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))

  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BizShow));
