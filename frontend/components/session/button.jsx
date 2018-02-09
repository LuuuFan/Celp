import React from 'react';
import { Link } from 'react-router-dom';


class Button extends React.Component {


  handleClick(e){
    e.preventDefault();
    let userDropdown = document.getElementById('dropdown');
    if (userDropdown.classList.length > 0 && e.target.classList.value !== 'dropdown-modal-screen') {
      userDropdown.classList.remove('hidden');
    } else {
      userDropdown.classList.add('hidden');
    }
  }


  render(){
    const {currentUser, logout} = this.props;
    const display = currentUser ? (
      <div>
        <div className='user' onClick={(e)=>this.handleClick(e)}>
          <div className='userImg'>
            <img src={currentUser.avatar_url} />
          </div>
          <div className='userMenu'>
            <i className="fas fa-sort-down"></i>
          </div>
          <div id='dropdown' className='hidden'>
            <div id='user-dropdown' >
              <div className='user-dropdown-detail'>
                <div className='user-dropdown-detail-userImg'>
                  <img src={currentUser.avatar_url} />
                </div>
                <div className='user-detail'>
                  <Link to='/aboutme'>{currentUser.username}</Link>
                </div>
              </div>
              <hr/>
              <ul>
                <li><i className="fa fa-user" aria-hidden="true"></i><Link to='/aboutme'>About Me</Link></li>
                <li className='tooltip'>
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  <Link to='/aboutme'>Account Setting</Link>
                  <div className='tooltiptext'>under construction</div></li>
              </ul>
              <hr/>
              <ul>
                <a><li onClick={()=>this.props.logout()}>Log Out</li></a>
              </ul>
            </div>
            <div onClick={(e)=>this.handleClick(e)} className='dropdown-modal-screen'>
            </div>
          </div>
        </div>
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
