import React from 'react';
import {connect} from 'react-redux';
import {createBookmark, deleteBookmark} from '../../actions/bookmark';
import BizShowBookmark from './biz_show_bookmark';

const mapStateToProps = (state, ownProps) => ({
  marked: state.entities.biz[ownProps.match.params.bizId]['bookmarked?']
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createBookmark: (bizId) => dispatch(createBookmark(bizId)),
  deleteBookmark: (bizId) => dispatch(deleteBookmark(bizId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BizShowBookmark);
