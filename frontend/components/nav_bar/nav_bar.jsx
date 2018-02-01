import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../session/button';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser, logout} = this.props;
    // debugger
    return (
    <header className='header'>
      <div className='nav-bar'>
        <h1 className='logo'>
          <a href='/'>
            <span>Celp</span>
            <i class="fab fa-yelp"></i>
          </a>
        </h1>
        <div className='searchBar'>
          <span>Find</span>
          <input type='text' placeholder="tacos, cheap dinners, Max's"/>
          <span>Near</span>
          <input type='text' placeholder="San Francisco, CA, US"/>
          <button>
            <i class="fas fa-search"></i>
          </button>
        </div>
        <Button currentUser={currentUser} logout={logout}/>
      </div>
      <div className='menu-bar'>
        <div className='menu'>
          <div className='business'>
            <ul>
              <a href='/#/biz'>
                <li>
                  <i class="fas fa-utensils"></i>
                  <p>Restaurants</p>
                </li>
              </a>
              <a href='/'>
                <li>
                  <i class="fas fa-glass-martini"></i>
                  Nightlife
                </li>
              </a>
              <a href='/'>
                <li>
                  <i class="fas fa-wrench"></i>
                  Home Services
                  <i className="fa fa-sort-desc" aria-hidden="true"></i>
                </li>
              </a>
              </ul>
          </div>
          <div className='services'>
            <ul>
              <a href='/#/write_review'><li>Write a Review</li></a>
              <a href='/'><li>Events</li></a>
              <a href='/'><li>talk</li></a>
            </ul>
          </div>
          {!currentUser ?
            <Link to='/login'>
              <div className='login-btn'>
                <p>Log In</p>
              </div>
            </Link> : ""}
        </div>
      </div>
    </header>
    );
  }

}

export default NavBar;
