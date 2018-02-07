import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../session/button';
import SearchContainer from './search_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    if (this.props.currentUser !== newProps.currentUser) {
      console.log('do something but I donot know');
    }
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
            <i className="fab fa-yelp"></i>
          </a>
        </h1>
        <SearchContainer />
        <Button currentUser={currentUser} logout={logout}/>
      </div>
      <div className='menu-bar'>
        <div className='menu'>
          <div className='business'>
            <ul>
              <a href='/#/biz'>
                <li>
                  <i className="fas fa-utensils"></i>
                  Restaurants
                </li>
              </a>
              <a href='/'>
                <li>
                  <i className="fas fa-glass-martini"></i>
                  Nightlife
                </li>
              </a>
              <a href='/'>
                <li>
                  <i className="fas fa-wrench"></i>
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
              <a href='/'><li>Talk</li></a>
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
