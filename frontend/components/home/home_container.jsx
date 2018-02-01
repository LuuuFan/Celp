import React from 'react';
import {connect} from 'react-redux';
import Home from './home';
import {logout} from '../../actions/session';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  img: [
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1500759_10202453164706123_223987173_o.jpg?oh=2ebd31423fe1780a531e1da7606cbdca&oe=5ADE4CD5',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1501349_10202453168466217_804954821_o.jpg?oh=fcb423a163691b33856b052bb38dfe24&oe=5ADDCFDB',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1522874_10202453141665547_272813371_o.jpg?oh=ef1f681bc575f9596268b4aa7ad1c89a&oe=5B26A25C',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1559264_10202644420367395_1712400262_o.jpg?oh=86dab3ebf108d9a7b0f86aac79abd884&oe=5ADD2FE1',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1932594_10202694158330813_956381266_o.jpg?oh=9cb0eca26e19c589c9a1ed7baafc4718&oe=5AED5112',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1780203_10202739253498164_176394682_o.jpg?oh=5601d7dff6eb11a843356b6c7bf43ad0&oe=5B257BF7',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1781138_10203058700044128_2477849618289538833_o.jpg?oh=94d82f982e25f4bcaef50f5c7179cde9&oe=5AE41CF0',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/10257499_10203058700124130_4604953966735714631_o.jpg?oh=a7b965f0ec8763c059571f004befc809&oe=5AE79426'
  ]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);