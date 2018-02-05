import React from 'react';


class WriteReview extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    if (!this.props.biz) {
      this.props.requestBiz(this.props.match.params.bizId);
    }
  }
  //
  // componentWillReceiveProps(newProps){
  //   if (!this.props.review) {
  //     this.props.requestBiz(this.props.match.params.bizId);
  //   }
  // }

  handleInput(e){
    this.setState({body: e.target.value.replace(/\n\r?/g, '<br />')});
  }

  handleChange(e, rate){
    this.setState({rate: rate});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(this.props.match.params.bizId, this.state)
      .then(this.props.history.push(`/biz/${this.props.match.params.bizId}`));
  }


  render(){
    const {biz} = this.props;
    return (
      <div className='write-review'>
        { biz ?
          <h1><a href={`/#/biz/${biz.id}`} target="_blank">{biz.name}</a></h1>
        : ""}
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <div className='write-review-input'>
            <ul>
              <li>
                <input type='radio' name='rating' id='rating-1' onChange={(e)=>this.handleChange(e, 1)}/>
              </li>
              <li>
                <input type='radio' name='rating' id='rating-2' onChange={(e)=>this.handleChange(e, 2)}/>
              </li>
              <li>
                <input type='radio' name='rating' id='rating-3' onChange={(e)=>this.handleChange(e, 3)}/>
              </li>
              <li>
                <input type='radio' name='rating' id='rating-4' onChange={(e)=>this.handleChange(e, 4)}/>
              </li>
              <li>
                <input type='radio' name='rating' id='rating-5' onChange={(e)=>this.handleChange(e, 5)}/>
              </li>
            </ul>
            <textarea
              onChange={this.handleInput}
              value={this.state.body}
              placeholder="Your review helps others learn about great local businesses. &#10;Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
            />
          </div>
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default WriteReview;
