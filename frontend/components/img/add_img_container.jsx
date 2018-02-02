import React from 'react';
import {connect} from 'react-redux';
import AddImg from './add_img';
import {requestBiz} from '../../actions/biz';
import {createImg} from '../../actions/img';

const mapStateToProps = (state, ownProps) => ({
  biz: state.entities.biz[ownProps.match.params.bizId]
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    requestBiz: (bizId) => dispatch(requestBiz(bizId)),
    createImg: (bizId, img) => dispatch(createImg(bizId, img))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(AddImg);
