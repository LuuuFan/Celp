import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../session/button';
import SearchContainer from './search_container';
import CategoryContainer from './category_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser, logout} = this.props;
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
          <CategoryContainer />
          <div className='services'>
            <ul>
              <a href='/#/writereview/search'><li>Write a Review</li></a>
              <a href='/#/events'><li>Events</li></a>
              <a href='https://www.yelp.com/talk'><li className='tooltip'>Talk</li></a>
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
