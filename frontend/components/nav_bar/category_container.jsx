import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {requestCategory} from '../../actions/search';
import Category from './category';


const mapDispatchToProps = (dispatch) => ({
  requestCategory: (cat) => dispatch(requestCategory(cat))
});

export default withRouter(connect(null, mapDispatchToProps)(Category));
