import React from 'react';
import {connect} from 'react-redux';
import BizImgIndex from './biz_img_index';
import {requestAllImg} from '../../actions/img';
import {requestBiz} from '../../actions/biz';


const mapStateToProps = (state, ownProps) => ({
  biz: state.entities.biz[ownProps.match.params.bizId],
  imgs: Object.values(state.entities.imgs)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // requestBiz: (bizId) => dispatch(requestBiz(bizId)),
  requestAllImg: (bizId) => dispatch(requestAllImg(bizId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BizImgIndex);
