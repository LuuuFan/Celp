import React from 'react';
import {connect} from 'react-redux';
import Home from './home';
import {logout, createSession} from '../../actions/session';
import {requestCategory} from '../../actions/search';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  bizes: Object.values(state.entities.biz),
  img: [
    'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671579/1780203_10202739253498164_176394682_o_yj43s3.jpg',
    'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671548/10257499_10203058700124130_4604953966735714631_o_yf4ulc.jpg',
    'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671534/1781138_10203058700044128_2477849618289538833_o_xtk2zl.jpg',
    'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671515/1559264_10202644420367395_1712400262_o_xt2tls.jpg',
    'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671485/1500759_10202453164706123_223987173_o_ac1x8t.jpg',
    'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671415/1522874_10202453141665547_272813371_o_ytcz92.jpg',
    'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671403/1501349_10202453168466217_804954821_o_qldcae.jpg',
    'https://res.cloudinary.com/ddwejrtgh/image/upload/v1525671889/1932594_10202694158330813_956381266_o_ktct9w.jpg'
  ]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createSession: (user) => dispatch(createSession(user)),
  requestCategory: (cat, num) => dispatch(requestCategory(cat, num))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
