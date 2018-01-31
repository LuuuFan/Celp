import React from 'react';
import Button from '../session/button';


const Home = ({currentUser, logout}) => (
  <div className='home'>
    <div className='home-img-frame'>
      <img className='home-img' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1500759_10202453164706123_223987173_o.jpg?oh=2ebd31423fe1780a531e1da7606cbdca&oe=5ADE4CD5'/>
    </div>
    <div className='home-main'>
      <div className='home-header'>
        <div className='services'>
          <ul>
            <a><li>Write a Review</li></a>
            <a><li>Events</li></a>
            <a><li>talk</li></a>
          </ul>
        </div>
        {currentUser ? (
          <Button currentUser={currentUser} logout={logout} />
        ) : (
          <div className='sessionButton'>
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
        <a>
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          <li>
            Restaurants
          </li>
        </a>
        <a>
          <i className="fa fa-glass" aria-hidden="true"></i>
          <li>
            Nightlife
          </li>
        </a>
        <a>
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

export default Home;
