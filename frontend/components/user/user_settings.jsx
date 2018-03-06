import React from 'react';
import UserProfile from './user_settings_profile';
import Password from './user_settings_password';
import Email from './user_settings_email';

class UserSettings extends React.Component{
  constructor(props){
    super(props);
    this.state = {listName: 'UserProfile'};
  }

  handleClick(listName){
    this.setState({listName: listName});
  }

  render(){
    const {currentUser} = this.props;
    return(
      <div className='user-settings'>
        <div className='user-show-detail-nav'>
          <div>
            <h2>{currentUser.username}'s Account Settings'</h2>
            <ul>
              <li className={this.state.listName == 'UserProfile' ? 'user-profile-nav-clicked' : "" } onClick={()=>this.handleClick('UserProfile')}>Profile</li>
              <li className={this.state.listName == 'Password' ? 'user-profile-nav-clicked' : "" } onClick={()=>this.handleClick('Password')}>Password</li>
              <li className={this.state.listName == 'Email' ? 'user-profile-nav-clicked' : "" } onClick={()=>this.handleClick('Email')}>Email</li>
            </ul>
          </div>
        </div>
        <div className='user-settings-sub-component'>
          { this.state.listName == 'UserProfile' ? <UserProfile /> : ""}
          { this.state.listName == 'Password' ? <Password /> : ""}
          { this.state.listName == 'Email' ? <Email currentUser={currentUser} /> : ""}

        </div>
      </div>
    )
  }
}

export default UserSettings;
