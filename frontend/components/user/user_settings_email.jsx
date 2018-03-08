import React from 'react';

class UserSettingsEmail extends React.Component {
  constructor(){
    super();
    this.state = {
      phoneNumber: "",
      password: "",
      email: "",
      className: 'modal',
      hint: 'hidden',
      notification: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    if (this.props.currentUser) {
      this.setState({
        phoneNumber: this.props.currentUser.phone_number,
        notification: ''
      })
    }
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
      if (this.state.hint === '') {
        this.setState({hint: 'hidden'});
      }
      this.setState({[type]: e.target.value});
    }
  }

  saveEmail(e){
    e.preventDefault();
    const user = {
      id: this.props.currentUser.id,
      multiple_email: this.state.email,
      password: this.state.password
    }
    // this.props.updateUser(user)
  }

  savePhoneNumber(e){
    e.preventDefault();
    if (this.phoneNumberCheck(this.state.phoneNumber && this.props.currentUser.phone_number !== this.state.phoneNumber)) {
      const user = {
        id: this.props.currentUser.id,
        phone_number: this.state.phoneNumber
      }
      this.props.updateUser(user).then(()=>this.setState({notification: 'User information saved'}))
    } else if (this.props.currentUser.phone_number == this.state.phoneNumber){
      this.setState({notification: "You phone number doesn't change"})
    } else {
      this.setState({hint: ''})
    }
  }

  closeNotification(){
    this.setState({notification: ""})
  }

  render(){
    const {currentUser} = this.props;
    return(
      <div>
        {this.state.notification ?
          <div className='success-notification'>
            {this.state.notification}
            <div onClick={()=>this.closeNotification()}>
              <span>&times;</span>
            </div>
          </div>
          : ""}
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
            <p>This function does not finish yet. I will finish it as soon as possilbe. But I don't want to remove it. please~~~</p>
            <form className='user-setting-add-email'>
              <label>Current Celp Password</label>
              <input type='password' onChange={this.handleInput('password')} value={this.state.password}/>
              <label>Email Address</label>
              <input type='text' onChange={this.handleInput('email')} value={this.state.email}/>
              <div>
                <input  onClick={()=>this.closeModal()} type='submit' value='Save'/>
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
              <div className={`hint ${this.state.hint}`}>Please input the valid phone number</div>
            </div>
            <input onClick={(e)=>this.savePhoneNumber(e)} className='user-settings-save-phone-numbers' type='submit' value='Save Phone Number'/>
          </form>
        </div>
      </div>
    )
  }
}


export default UserSettingsEmail
