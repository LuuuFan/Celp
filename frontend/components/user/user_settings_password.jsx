import React from 'react';

class UserSettingsPassword extends React.Component {
  constructor(){
    super();
    this.state = {
      oldPassword:'',
      newPassword:'',
      confirmPassword:'',
      error: '',
      notification: ''
    };
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
    if (this.state.newPassword === this.state.confirmPassword) {
      const user = {
        id: this.props.currentUser.id,
        password: this.state.oldPassword,
        newPassword: this.state.newPassword
      }
      this.props.updateUser(user).then(()=>{
        this.setState({
          oldPassword:'',
          newPassword:'',
          confirmPassword:'',
          notification: 'Your new password has been saved.'
        });
      })
    } else {
      this.setState({error: 'Verify new password is not same with new password'})
    }
  }

  handleClose(){
    if (this.state.error) {
      this.setState({error: ""})
    } else {
      this.props.clearErrors();
    }
  }

  closeNotification(){
    this.setState({notification: ""})
  }

  render(){
    return(
      <div>
        <h1>Change Your Password</h1>
          {this.state.notification ?
            <div className='success-notification'>
              {this.state.notification}
              <div onClick={()=>this.closeNotification()}>
                <span>&times;</span>
              </div>
            </div>
           : ""}
          {this.props.errors.length ? (
            <div className='session-error'>
              <p>{this.props.errors[0]}</p>
              <div onClick={()=>this.handleClose()} className='errors-closeBtn'>&times;</div>
            </div>
          ) : (
            ""
          )}
        <form className='user-settings-change-password'>
          <label>Current password</label>
          <p>Enter your existing password.</p>
          <input onChange={this.handleInput('oldPassword')} type='password' value={this.state.oldPassword}/>
          <label>New Password</label>
          <p>Enter the new password you would like.</p>
          <input onChange={this.handleInput('newPassword')} type='password' value={this.state.newPassword}/>
          { this.state.error ?
            <div className='session-error'>
              <p>{this.state.error}</p>
              <div onClick={()=>this.handleClose()} className='errors-closeBtn'>&times;</div>
            </div> : "" }
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
