import React from 'react';
import {connect} from 'react-redux';
import BizShow from './biz_show';
import {requestBiz} from '../../actions/biz';

const mapStateToProps = (state, ownProps) => {
  let biz = state.entities.biz[ownProps.match.params.bizId];
  let imgs = [];
  if (biz && biz.img_ids) {
    imgs = biz.img_ids.map(id=>state.entities.imgs[id]);
  }
  let reviews= [];
  if (biz && biz.review_ids) {
    reviews = biz.review_ids.map(id=>state.entities.reviews[id]);
  }
  return ({
    biz,
    imgs,
    reviews
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    requestBiz: (bizId) => dispatch(requestBiz(bizId))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(BizShow);
