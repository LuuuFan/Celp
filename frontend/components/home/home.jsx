import React from 'react';

const Home = () => (
  <div className='Home'>
    <div className='services'>
      <ul>
        <a><li>Write a Review</li></a>
        <a><li>Events</li></a>
        <a><li>talk</li></a>
      </ul>
    </div>
    
    <div className='home-img-frame'>
      <img className='home-img' src='https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/1522874_10202453141665547_272813371_o.jpg?oh=ef1f681bc575f9596268b4aa7ad1c89a&oe=5B26A25C'/>
    </div>
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
  </div>
);

export default Home;
