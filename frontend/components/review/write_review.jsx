import React from 'react';


class WriteReview extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    if (this.props.match.path == '/update_review/biz/:bizId'){
      this.props.requestReview(this.props.match.params.bizId)
    }
    if (!this.props.biz) {
      this.props.requestBiz(this.props.match.params.bizId);
    }
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps){
    if (newProps.review) {
      this.setState(newProps.review);
    }
  }

  componentDidUpdate(prevProps, prevState){
    const background = document.getElementById('write-review-rating-background');
    if (background) {
      const position = 48 * this.state.rate - 24;
      background.style.backgroundPosition = `0 -${position}px`;
    }
  }

  handleInput(e){
    if (this.props.errors.length > 0) {
      this.props.clearErrors();
    }
    this.setState({body: e.target.value});
  }

  handleChange(e, rate){
    this.setState({rate: rate});
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.match.path == '/write_review/biz/:bizId') {
      this.props.createReview(this.props.match.params.bizId, this.state)
      .then(()=>this.props.history.push(`/biz/${this.props.match.params.bizId}`));
    } else {
      this.props.updateReview(this.props.match.params.bizId, this.state)
      .then(()=>this.props.history.push(`/biz/${this.props.match.params.bizId}`));
    }
  }

  mouseOver(rate){
    const background = document.getElementById('write-review-rating-background');
    const position = 48 * rate - 24;
    background.style.backgroundPosition = `0 -${position}px`;
    this.setState({rate: rate});
  }

  render(){
    const {biz, review, errors} = this.props;
    const btnName = this.props.match.path == '/write_review/biz/:bizId' ? "Post Review" : "Update Review";
    return (
      <div className='write-review'>
        { biz ?
          <h1><a href={`/#/biz/${biz.id}`} target="_blank">{biz.name}</a></h1>
        : ""}
        { this.state ?
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div className='write-review-input'>
              <div id='write-review-rating-background'>
                <ul id='write-review-rating'>
                  <li>
                    <label htmlFor='rate-1' onMouseOver={()=>this.mouseOver(1)}>
                      <input id='rate-1' type='radio' name='rating' id='rating-1' checked={this.state.rate === 1} onChange={(e)=>this.handleChange(e, 1)}/>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='rate-2' onMouseOver={()=>this.mouseOver(2)}>
                      <input id='rate-2' type='radio' name='rating' id='rating-2' checked={this.state.rate === 2} onChange={(e)=>this.handleChange(e, 2)}/>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='rate-3' onMouseOver={()=>this.mouseOver(3)}>
                      <input id='rate-3' type='radio' name='rating' id='rating-3' checked={this.state.rate === 3} onChange={(e)=>this.handleChange(e, 3)}/>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='rate-4' onMouseOver={()=>this.mouseOver(4)}>
                      <input id='rate-4' type='radio' name='rating' id='rating-4' checked={this.state.rate === 4} onChange={(e)=>this.handleChange(e, 4)}/>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='rate-5' onMouseOver={()=>this.mouseOver(5)}>
                      <input id='rate-5' type='radio' name='rating' id='rating-5' checked={this.state.rate === 5} onChange={(e)=>this.handleChange(e, 5)}/>
                    </label>
                  </li>
                </ul>
              </div>
              <textarea
                onChange={this.handleInput}
                value={this.state.body}
                placeholder="Your review helps others learn about great local businesses. &#10;Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
                />
                {errors.length ? (
                  <div className='write-review-error'>
                    <p>{errors[0]}</p>
                  </div>
                ) : (
                  ""
                )}
            </div>
            <input type='submit' value={btnName}/>
          </form>
        :""}

      </div>
    );
  }
}

export default WriteReview;
