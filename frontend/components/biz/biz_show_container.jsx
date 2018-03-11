import React from 'react';
import {connect} from 'react-redux';
import BizShow from './biz_show';
import {requestBiz, sendSMS} from '../../actions/biz';
import {withRouter} from 'react-router-dom';
import {deleteReview} from '../../actions/review';
import {createReviewTag, deleteReviewTag} from '../../actions/review_tag';

const mapStateToProps = (state, ownProps) => {
  let biz = state.entities.biz[ownProps.match.params.bizId];
  let bizEnoughInfo = false;
  if (biz) {
    bizEnoughInfo = biz.hasOwnProperty("location");
  }
  let imgs = [];
  if (biz && biz.img_ids) {
    imgs = biz.img_ids.map(id=>state.entities.imgs[id]);
  }
  let reviews= [];
  let users = [];
  if (biz && biz.review_ids) {
    reviews = state.entities.reviews.order.map(id=>state.entities.reviews[id]);
    users = state.entities.users;
  }
  let currentUser = state.session.currentUser;
  return ({
    biz,
    imgs,
    reviews,
    users,
    currentUser,
    bizEnoughInfo
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    requestBiz: (bizId) => dispatch(requestBiz(bizId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    sendSMS: (bizId, phoneNumber) => dispatch(sendSMS(bizId, phoneNumber)),
    createReviewTag: (reviewId, tag) => dispatch(createReviewTag(reviewId, tag)),
    deleteReviewTag: (reviewId, tag) => dispath(deleteReviewTag(reviewId, tag))
  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BizShow));
