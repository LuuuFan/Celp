import React from 'react';
import {connect} from 'react-redux';
import BizShow from './biz_show';
import {requestBiz} from '../../actions/biz';

const mapStateToProps = (state, ownProps) => ({
  biz: state.entities.biz[ownProps.match.params.bizId]
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    requestBiz: (bizId) => dispatch(requestBiz(bizId))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(BizShow);
