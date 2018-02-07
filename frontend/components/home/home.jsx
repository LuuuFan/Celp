import React from 'react';
import Button from '../session/button';
import SearchContainer from '../nav_bar/search_container';


class Home extends React.Component {

  constructor(props){
    super(props);
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
            this.props.createSession({username: 'demo_user', email:'', password: 'password'}).then(this.props.history.push('/'));
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
          <img className='home-img' src={`${img[Math.floor(Math.random()*8)]}`}/>
        </div>
        <div className='home-main'>
          <div className='home-header'>
            <div className='services'>
              <a href='/#/write_review'><div>Write a Review</div></a>
              <a href='/'><div>Events</div></a>
              <a href='/'><div>Talk</div></a>
            </div>
            {currentUser ? (
              <Button currentUser={currentUser} logout={logout} />
            ) : (
              <div className='sessionButton'>
                <a href='/#/login' onClick={()=>this.loginDemo()}><div className='login'><p>Demo</p></div></a>
                <a href='/#/login'><div className='login'><p>Log In</p></div></a>
                <a href='/#/signup'><div className='signup'><p>Sign Up</p></div></a>
              </div>
            )}
          </div>
          <a href='/'><h1 className='home-logo'>Celp<i className="fab fa-yelp"></i></h1></a>
          <SearchContainer />
          <div className='business'>
            <ul>
            <a href='/#/biz'>
              <i className="fas fa-utensils"></i>
              <li>
                Restaurants
              </li>
            </a>
            <a href='/'>
              <i className="fas fa-glass-martini"></i>
              <li>
                Nightlife
              </li>
            </a>
            <a href='/'>
              <i className="fas fa-wrench"></i>
              <li>
                Home Services
              </li>
              <i className="fa fa-sort-desc" aria-hidden="true"></i>
            </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
