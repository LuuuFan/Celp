import React from 'react';

class SessionForm extends React.Component {
  constructor (){
    super();
    this.state = {
      'username': '',
      'email': '',
      'password': ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.path !== newProps.match.path) {
      this.props.clearErrors();
    }
  }

  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleClick(e){
    e.preventDefault();
    this.props.action(this.state).then(()=>this.props.history.push('/'));
    this.setState({
      'username': '',
      'email': '',
      'password': ''
    });
  }

  handleClose(){
    this.props.clearErrors();
  }


  render(){
    const text = this.props.formType == 'signup' ? 'Sign Up' : 'Log In';
    const h2 = this.props.formType == 'signup' ? 'Sign Up for' : 'Log In to';
    return (
      <div>
        <header className='header-session'>
          <h1 className='logo'>
            <a href='/'>
              <span>Celp</span>
              <i className="fa fa-yelp" aria-hidden="true"></i>
            </a>
          </h1>
        </header>
        {this.props.errors.length ? (
          <div className='session-error'>
            <p>{this.props.errors[0]}</p>
            <div onClick={()=>this.handleClose()} className='errors-closeBtn'>&times;</div>
          </div>
        ) : (
          ""
        )}
        <div className='session'>
          <div className='session-form'>
            <h2>{h2} Celp</h2>
              {this.props.formType !== 'signup' ?
                <h3>New to Celp? <a href='#/signup/'>Sign up</a></h3>
                 :
                <h3>Connect with great local businesses</h3>
              }
            <div className='term'>
              <p>By {text}, you agree to Celp’s <a>Terms of Service</a> and <a>Privacy Policy.</a></p>
            </div>
            <form className='normal-form'>
              <input id='username' onChange={this.handleInput('username')} name='user[username]' type='text' value={this.state.username} placeholder='username'/>
              {this.props.formType == 'signup' ?
                <input onChange={this.handleInput('email')} type='text' name='user[email]' value={this.state.email} placeholder='email'/> : ''
              }
              <input id='password' onChange={this.handleInput('password')} type='password' name='user[password]' value={this.state.password} placeholder='password'/>
              { this.props.formType !== 'signup' ?
                <a href='#/forgotpassword/'><p>Forgot password?</p></a>
                : ''
              }
              <button id='login' onClick={(e)=>this.handleClick(e)}>{text}</button>
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
      </div>
    );
  }
}

export default SessionForm;
