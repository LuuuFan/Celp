import React from 'react';

class SignupLogin extends React.Component {
  constructor (){
    super();
    this.state = {
      'username': '',
      'email': '',
      'password': ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleClick(e){
    e.preventDefault();
    this.props.action(this.state).then(()=>this.props.history.push('/'));
  }

  render(){
    const text = this.props.formType == 'signup' ? 'Sign Up' : 'Log In';
    const h2 = this.props.formType == 'signup' ? 'Sign Up for' : 'Log In to';
    return (
      <div className='session'>
        <div className='session-form'>
          <h2>{h2} Celp</h2>
            {this.props.formType !== 'signup' ?
              <h3>New to Celp? <a href='#/signup/'>Sign up</a></h3>
               :
              ''
            }
          <div className='term'>
            <p>By {text}, you agree to Celp’s <a>Terms of Service</a> and <a>Privacy Policy.</a></p>
          </div>
          <form className='normal-form'>
            <input onChange={this.handleInput('username')} name='user[username]' type='text' value={this.state.username} placeholder='username'/>
            {this.props.formType == 'signup' ?
              <input onChange={this.handleInput('email')} type='text' name='user[email]' value={this.state.email} placeholder='email'/> : ''
            }
            <input onChange={this.handleInput('password')} type='password' name='user[password]' value={this.state.password} placeholder='password'/>
            <a href='#/forgotpassword/'><p>Forgot password?</p></a>
            <button onClick={(e)=>this.handleClick(e)}>{text}</button>
            {this.props.formType !== 'signup' ?
              <p>New to Celp? <a href='#/signup/'>Sign up</a></p>
               :
              <p>Already on Celp? <a href='#/login/'>Log in</a></p>
            }
        </form>
        </div>
        <div className='session-img'>
        </div>
      </div>
    );
  }
}

export default SignupLogin;


// <div className='session-label'>
//   <label>Username</label>
//   {this.props.formType === 'signup' ?
//     <label>Email</label> : ''
//     }
//     <label>Password</label>
//   </div>
