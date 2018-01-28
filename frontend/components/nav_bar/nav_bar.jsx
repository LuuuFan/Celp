import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {

  const display = currentUser ? (
    <a className='user'>
      <div className='userImg'>
        <img src='https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png' />
      </div>
      <a className='userMenu'>
        <i className="fa fa-sort-desc" aria-hidden="true"></i>
      </a>
    </a>
  ) : (
    <div className='session'>
      <ul>
        <Link className='signup-btn' to='/signup'>
          <li>
              Sign Up
          </li>
        </Link>
      </ul>
  </div>
  );


  return (
    <header className='header'>
      <div className='nav-bar'>
        <h1 className='logo'>
          <span>Celp</span>
          <i className="fa fa-yelp" aria-hidden="true"></i>
        </h1>
        <div className='searchBar'>
          <span>Find</span>
          <input type='text' placeholder="tacos, cheap dinners, Max's"/>
          <span>Near</span>
          <input type='text' placeholder="San Francisco, CA, US"/>
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        {display}
      </div>
      <div className='menu-bar'>
        <div className='menu'>
          <div className='business'>
            <ul>
              <a>
                <li>
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                  Restaurants
                </li>
              </a>
              <a>
                <li>
                  <i className="fa fa-glass" aria-hidden="true"></i>
                  Nightlife
                </li>
              </a>
              <a>
                <li>
                  <i className="fa fa-wrench" aria-hidden="true"></i>
                  Home Services
                  <i className="fa fa-sort-desc" aria-hidden="true"></i>
                </li>
              </a>
              </ul>
          </div>
          <div className='services'>
            <ul>
              <a><li>Write a Review</li></a>
              <a><li>Events</li></a>
              <a><li>talk</li></a>
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

export default NavBar;
