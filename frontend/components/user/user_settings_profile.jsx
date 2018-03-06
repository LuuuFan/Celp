import React from 'react';

class UserSettingsProfile extends React.Component {
  constructor(){
    super();
    this.state = {
      avatar: ""
    };
  }

  componentDidMount(){
    if (this.props.currentUser && !this.state.avatar){
      this.setState({avatar: this.props.currentUser.avatar_url})
    }
  }

  uploadAvatar(){
    cloudinary.openUploadWidget({ cloud_name: 'ddwejrtgh', upload_preset: 'l8du0kzb'},
      (errors, result) => {
        if (errors) {
        }
        result.forEach(file=>{
          let avatar_url = 'https' + file.url.slice(4)
          this.setState({avatar: avatar_url});
        });
      });
  }


  render(){
    const {currentUser} = this.props
    return(
      <div className='user-setting-profile'>
        <h1>Profile</h1>
        <p>Tell us more about you.</p>
        <div className='user-setting-profile-avatar'>
          <h2>Your Profile Photo <a onClick={()=>{this.uploadAvatar()}}>(Add/Edit)</a></h2>
          <div className='user-setting-profile-avatar-container'>
            <img src={this.state.avatar} />
          </div>
        </div>
        <form className='user-settings-profile-form'>
          <label>First Name</label>
          <input type='text' />
          <label>Last Name</label>
          <input type='text' />
          <label>Nickame</label>
          <input type='text' />
          <label>Your Headline</label>
          <input type='text' />
          <label>I Love...</label>
          <textarea />
          <label>Find Me In</label>
          <input type='text' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}


export default UserSettingsProfile
