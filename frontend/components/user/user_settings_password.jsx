import React from 'react';

class UserSettingsPassword extends React.Component {
  constructor(){
    super();
    this.state = {oldPassword:'', newPassword:'', confirmPassword:''};
    this.handleInput = this.handleInput.bind(this);
  }

  handleCancel(){
    window.location.reload(true);
  }

  handleInput(type){
    return (e)=>{
      e.preventDefault();
      this.setState({[type]: e.target.value})
    }
  }

  changePassword(e){
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>Change Your Password</h1>
        <form className='user-settings-change-password'>
          <label>Current password</label>
          <p>Enter your existing password.</p>
          <input onChange={this.handleInput('oldPassword')} type='password' value={this.state.oldPassword}/>
          <label>New Password</label>
          <p>Enter the new password you would like.</p>
          <input onChange={this.handleInput('newPassword')} type='password' value={this.state.newPassword}/>
          <label>Verify new password</label>
          <p>Reenter your password to verify.</p>
          <input onChange={this.handleInput('confirmPassword')} type='password' value={this.state.confirmPassword}/>
          <input onClick={(e)=>this.changePassword(e)} type='submit' value='Save New Password' />
          <a onClick={()=>this.handleCancel()}>cancel</a>
        </form>
      </div>
    )
  }
}


export default UserSettingsPassword
