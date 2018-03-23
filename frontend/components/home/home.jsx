import React from 'react';
import Button from '../session/button';
import SearchContainer from '../nav_bar/search_container';
import CategoryContainer from '../nav_bar/category_container';
import HomeCenter from './home_center';

class Home extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestCategory('Restaurant', 3);
  }

  loginDemo(){
    window.setTimeout(()=>{
      const username = document.getElementById('username');
      username.value = 'demo_user';
      window.setTimeout(()=>{
        const password = document.getElementById('password');
        password.value = 'password';
        window.setTimeout(()=>{
          const btn = document.getElementById('login');
          btn.setAttribute("style", "background-color: #a71c1c");
          window.setTimeout(()=>{
            this.props.createSession({username: 'demo_user', email:'', password: 'password'})
              .then(()=>this.props.history.push('/'));
          }, 100);
        }, 500);
      }, 1000);
    }, 1000);
  }

  render(){
    const {currentUser, logout, img} = this.props;
    return (
      <div className='home'>
        <div className='home-img-frame'>
          <img className='home-img' src={`${img[Math.floor(Math.random()*6)]}`}/>
          <div><a href='https://celp.herokuapp.com/#/biz/41/'>Sungrass Bakery</a></div>
          <div className='home-img-photo-by'>
            <p>Photo by </p>
            <a href='https://celp.herokuapp.com/#/user/luufan'>luufan</a>
          </div>
        </div>
        <div className='home-main'>
          <div className='home-header'>
            <div className='services'>
              <a href='/#/writereview/search'><div>Write a Review</div></a>
              <a href='/#/events'><div>Events</div></a>
              <a href='https://www.yelp.com/talk'><div>Talk</div></a>
            </div>
            {currentUser ? (
              <Button currentUser={currentUser} logout={logout} />
            ) : (
              <div className='sessionButton'>
                <a href='/#/login' onClick={()=>this.loginDemo()}><div className='login demo-login'><p>Demo User</p></div></a>
                <a href='/#/login'><div className='login'><p>Log In</p></div></a>
                <a href='/#/signup'><div className='signup'><p>Sign Up</p></div></a>
              </div>
            )}
          </div>
          <div className='home-logo-container'>
            <a href='/'><h1 className='home-logo'>Celp<i className="fab fa-yelp"></i></h1></a>
          </div>
          <SearchContainer />
          <CategoryContainer />
        </div>
        <HomeCenter bizes={this.props.bizes}/>
      </div>
    );
  }
}

export default Home;
