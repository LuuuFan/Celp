import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {key: '', loc: ''};
    // this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e, type){
    this.setState({[type]: e.target.value});
  }

  handleClick(e){
    e.preventDefault();
    const loc = this.state.loc ? this.state.loc : 'San Francisco'
    this.props.requestSearch(this.state.key, loc.split(' ').join('+'))
      .then(this.props.history.push('/search'));
  }

  render(){
    return(
      <form onSubmit={(e)=>handleClick(e)} className='searchBar'>
        <span>Find</span>
        <input onChange={(e)=>this.handleInput(e,'key')} type='text' value={this.state.key} placeholder="tacos, cheap dinners, Max's"/>
        <span>Near</span>
        <input onChange={(e)=>this.handleInput(e,'loc')} type='text' value={this.state.loc} placeholder="San Francisco, CA, US"/>
        <button onClick={(e)=>this.handleClick(e)}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default Search;
