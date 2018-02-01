import React from 'react';
import { Link } from 'react-router-dom';


class Button extends React.Component {


  handleClick(e){
    e.preventDefault();
    let userDropdown = document.getElementById('user-dropdown');
    if (userDropdown.classList.length > 0) {
      userDropdown.classList.remove('hidden');
    } else {
      userDropdown.classList.add('hidden');
    }
  }


  render(){
    const {currentUser, logout} = this.props;
    const display = currentUser ? (
      <div>
        <a className='user' onClick={(e)=>this.handleClick(e)}>
          <div className='userImg'>
            <img src='https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png' />
          </div>
          <a className='userMenu'>
            <i class="fas fa-sort-down"></i>
          </a>
          <div id='user-dropdown' className='hidden'>
            <div className='user-dropdown-detail'>
              <img src='https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/7e4e0dfd903f/assets/img/default_avatars/user_large_square.png' />
              <div className='user-detail'>
                <a href='/aboutme'>{currentUser.username}</a>
              </div>
            </div>
            <hr/>
            <ul>
              <li><i className="fa fa-user" aria-hidden="true"></i><a href='/aboutme'>About Me</a></li>
              <li><i className="fa fa-cog" aria-hidden="true"></i><a href='/setting'>Account Setting</a></li>
            </ul>
            <hr/>
            <ul>
              <a onClick={()=>this.props.logout()}><li>Log Out</li></a>
            </ul>
          </div>
        </a>
      </div>
    ) : (
      <div className='signup'>
        <ul>
          <Link className='signup-btn' to='/signup'>
            <li>
              Sign Up
            </li>
          </Link>
        </ul>
      </div>
    );
    return display;
  }

}

export default Button;
