import React from 'react';

class UserSettingsProfile extends React.Component {
  constructor(){
    super();
    this.state = {
      avatar_url: "",
      first_name: "",
      last_name: "",
      nickname: "",
      headline: "",
      love: "",
      find_me_in: "",
      notification: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    if (this.props.currentUser && !this.state.avatar_url){
      this.setState({
        avatar_url: this.props.currentUser.avatar_url,
        first_name: this.props.currentUser.first_name,
        last_name: this.props.currentUser.last_name,
        nickname: this.props.currentUser.nickname,
        headline: this.props.currentUser.headline,
        love: this.props.currentUser.love,
        find_me_in: this.props.currentUser.find_me_in
      })
    }
  }

  uploadAvatar(){
    cloudinary.openUploadWidget({ cloud_name: 'ddwejrtgh', upload_preset: 'l8du0kzb'},
      (errors, result) => {
        if (errors) {
        }
        result.forEach(file=>{
          let avatar_url = 'https' + file.url.slice(4)
          this.setState({avatar_url: avatar_url});
        });
      });
  }

  handleInput(type){
    return (e)=>{
      e.preventDefault();
      this.setState({[type]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = {
      id: this.props.currentUser.id,
      avatar_url: this.state.avatar_url,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      nickname: this.state.nickname,
      headline: this.state.headline,
      love: this.state.love,
      find_me_in: this.state.find_me_in
    }
    this.props.updateUser(user).then(()=>{
      this.setState({notification: 'You profile has been saved.'})
    })
  }

  closeNotification(){
    this.setState({notification: ""})
  }

  render(){
    const {currentUser} = this.props
    return(
      <div className='user-setting-profile'>
        {this.state.notification ?
          <div className='success-notification'>
            {this.state.notification}
            <div onClick={()=>this.closeNotification()}>
              <span>&times;</span>
            </div>
          </div>
          : ""}
        <h1>Profile</h1>
        <p>Tell us more about you.</p>
        <div className='user-setting-profile-avatar'>
          <h2>Your Profile Photo <a onClick={()=>{this.uploadAvatar()}}>(Add/Edit)</a></h2>
          <div className='user-setting-profile-avatar-container'>
            <img src={this.state.avatar_url} />
          </div>
        </div>
        <form className='user-settings-profile-form'>
          <label>First Name</label>
          <input type='text' value={this.state.first_name} onChange={this.handleInput('first_name')} />
          <label>Last Name</label>
          <input type='text' value={this.state.last_name} onChange={this.handleInput('last_name')} />
          <label>Nickname</label>
          <p>The Boss, Calamity Jane, The Prolific Reviewer</p>
          <input type='text' value={this.state.nickname} onChange={this.handleInput('nickname')} />
          <label>Your Headline</label>
          <p>Taco Tuesday Aficionado, The Globetrotting Reviewer</p>
          <input type='text'  value={this.state.headline} onChange={this.handleInput('headline')} />
          <label>I Love...</label>
          <p>Comma separated phrases (e.g. sushi, Radiohead, puppies)</p>
          <textarea  value={this.state.love} onChange={this.handleInput('love')} />
          <label>Find Me In</label>
          <p>Nob Hill, the newest brunch spot, a turtleneck</p>
          <input type='text'  value={this.state.find_me_in} onChange={this.handleInput('find_me_in')} />
          <input type='submit' value='Save Changes' onClick={(e)=>{this.handleSubmit(e)}}/>
        </form>
      </div>
    )
  }
}


export default UserSettingsProfile
