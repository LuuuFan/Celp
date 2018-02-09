import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {key: '', loc: '', className: 'hidden'};
  }

  // componentDidMount(){
  //   if (this.props.match.params.key || this.props.match.params.loc) {
  //     let key = this.props.match.params.key;
  //     let loc = this.props.match.params.loc;
  //     this.props.requestSearch(key, loc)
  //       .then(this.props.history.push(`/search?key=${key}&loc=${loc}`));
  //   }
  // }

  handleInput(e, type){
    if (this.state.className == '') {
      this.setState({className:'hidden'})
    }
    this.setState({[type]: e.target.value});
  }

  handleClick(e){
    e.preventDefault();
    const loc = this.state.loc.split(' ').join('+');
    const key = this.state.key.split(' ').join('+');
    if (!loc && !key) {
      this.setState({className: ''})
    } else {
      this.props.requestSearch(key, loc)
      .then(this.props.history.push(`/search?key=${key}&loc=${loc}`));
    }
  }

  render(){
    return(
      <form onSubmit={(e)=>handleClick(e)} className='searchBar'>
        <span>Find</span>
        <input onChange={(e)=>this.handleInput(e,'key')} type='text' value={this.state.key} placeholder="App Academy, Cake, Bakeries"/>
        <span>Near</span>
        <input onChange={(e)=>this.handleInput(e,'loc')} type='text' value={this.state.loc} placeholder="San Francisco, CA, US"/>
        <button onClick={(e)=>this.handleClick(e)}>
          <i className="fas fa-search"></i>
        </button>
        <div className={`hint ${this.state.className}`}>Say something here</div>
      </form>
    );
  }
}

export default Search;
