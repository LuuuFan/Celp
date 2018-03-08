import React from 'react';

class UserSettingsEmail extends React.Component {
  constructor(){
    super();
    this.state = {
      phoneNumber: "",
      password: "",
      email: "",
      className: 'modal',
      hint: 'hidden'
    };
    this.handleInput = this.handleInput.bind(this);
  }

  openModal(){
    this.setState({className: 'is-open', phoneNumber: ''});
  }

  closeModal(){
    this.setState({className: 'modal'});
  }

  phoneNumberCheck(str){
    const pattern = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/);
    return pattern.test(str);
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
            <p>Add accounts, remove accounts.</p>
          </div>
          <button onClick={()=>this.openModal()}>Add Email</button>
        </div>
        <div className={this.state.className}>
          <div className='user-setting-add-email-modal'>
            <div className='user-setting-add-email-modal-header'>
              <h1>Add a new email account</h1>
              <div onClick={()=>this.closeModal()}>
                <span>&times;</span>
              </div>
            </div>
            <form className='user-setting-add-email'>
              <label>Current Celp Password</label>
              <input type='password' onChange={this.handleInput('password')} value={this.state.password}/>
              <label>Email Address</label>
              <input type='text' onChange={this.handleInput('email')} value={this.state.email}/>
              <div>
                <input type='submit' value='Save'/>
                <a onClick={()=>this.closeModal()}>Cancel</a>
              </div>
            </form>
          </div>
          <div onClick={()=>this.closeModal()} className='modal-screen'></div>
        </div>
        <div className='user-settings-email-current-account'>
          {currentUser.email} &middot; Primary account
        </div>
        <div className='user-settings-email-phone'>
          <h1>Phone Number</h1>
          <p>Add or edit your phone number. We’ll do nothing with it since we are using free trial SMS service, cannot send message to non-verified phonenumber</p>
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
