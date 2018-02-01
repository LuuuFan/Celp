import React from 'react';
import Button from '../session/button';


class Home extends React.Component {

  constructor(props){
    super(props);
  }

  handleClick(e){
    // ===========Finish it in Bonus===============//
    // let userDropdown = document.getElementById('user-dropdown');
    // let user = document.getElementsByClassName('user');
    // debugger
    // if ( e.currentTarget
    //   && userDropdown
    //   && userDropdown.classList.length == 0) {
    //   userDropdown.classList.add('hidden');
    // }
  }

  loginDemo(){
    window.setTimeout(()=>{
      const username = document.getElementById('username');
      username.value = 'demo_users';
      window.setTimeout(()=>{
        const password = document.getElementById('password');
        password.value = 'password';
        window.setTimeout(()=>{
          const btn = document.getElementById('login');
          btn.click();
        }, 2000);
      }, 2000);
    }, 2000);
  }

  render(){
    const {currentUser, logout, img} = this.props;
    return (
      <div className='home' onClick={(e)=>this.handleClick(e)}>
        <div className='home-img-frame'>
          <img className='home-img' src={`${img[Math.floor(Math.random()*8)]}`}/>
        </div>
        <div className='home-main'>
          <div className='home-header'>
            <div className='services'>
              <ul>
                <a href='/#/write_review'><li>Write a Review</li></a>
                <a href='/'><li>Events</li></a>
                <a href='/'><li>talk</li></a>
              </ul>
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
          <a href='/'><h1 className='home-logo'>Celp<i className="fa fa-yelp" aria-hidden="true"></i></h1></a>
          <div className='searchBar'>
            <span>Find</span>
            <input type='text' placeholder="tacos, cheap dinners, Max's"/>
            <span>Near</span>
            <input type='text' placeholder="San Francisco, CA, US"/>
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className='business'>
            <ul>
            <a href='/#/biz'>
              <i className="fa fa-cutlery" aria-hidden="true"></i>
              <li>
                Restaurants
              </li>
            </a>
            <a href='/'>
              <i className="fa fa-glass" aria-hidden="true"></i>
              <li>
                Nightlife
              </li>
            </a>
            <a href='/'>
              <i className="fa fa-wrench" aria-hidden="true"></i>
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
