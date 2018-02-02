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
    // if ( ec.currentTarget
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
          btn.setAttribute("style", "background-color: #a71c1c");
          window.setTimeout(()=>{
            this.props.createSession({username: 'demo_users', email:'', password: 'password'}).then(this.props.history.push('/'));
          }, 100);
        }, 500);
      }, 1000);
    }, 1000);
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
              <a href='/#/write_review'><div>Write a Review</div></a>
              <a href='/'><div>Events</div></a>
              <a href='/'><div>talk</div></a>
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
          <div className='searchBar'>
            <span>Find</span>
            <input type='text' placeholder="tacos, cheap dinners, Max's"/>
            <span>Near</span>
            <input type='text' placeholder="San Francisco, CA, US"/>
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
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
