import React from 'react';

class UserSettingsEmail extends React.Component {
  constructor(){
    super();
    this.state = {phoneNumber: "", email: ""};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    }
  }

  saveEmail(e){
    e.preventDefault();
  }

  savePhoneNumber(e){
    e.preventDefault();
  }

  render(){
    const {currentUser} = this.props;
    return(
      <div>
        <div className='user-settings-email-add'>
          <div >
            <h1>Email Accounts</h1>
            <p>Add accounts, remove accounts, and change your primary account.</p>
          </div>
          <button>Add Email</button>
        </div>
        <div className='user-settings-email-current-account'>
          {currentUser.email} &middot; Primary account
        </div>
        <div className='user-settings-email-phone'>
          <h1>Phone Number</h1>
          <p>Add or edit your phone number. We’ll do nothing with it since we are using free trial SMS service, cannot send message to non-verfied phonenumber</p>
        </div>
        <div className='user-settings-email-update-phone'>
          <form className='user-setting-email-phone-form'>
            <div>
              <input readOnly value='+1' />
              <input onChange={this.handleInput('phoneNumber')} type='text' value={this.state.phoneNumber}/>
            </div>
            <input onClick={(e)=>this.savePhoneNumber(e)} className='user-settings-save-phone-numbers' type='submit' value='Save Phone Number'/>
          </form>
        </div>
      </div>
    )
  }
}


export default UserSettingsEmail
