import React from 'react';


class WriteReview extends React.Component{
  constructor(){
    super();
    this.state={body: '', rate:0};
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    if (!this.props.biz) {
      this.props.requestBiz(this.props.match.params.bizId);
    }
  }

  handleInput(e){
    this.setState({body: e.target.value});
  }

  render(){
    const {biz} = this.props;
    return (
      <div className='write-review'>
        { biz ?
          <h1><a href={`/#/biz/${biz.id}`} target="_blank">{biz.name}</a></h1>
        : ""}
        <form>
          <div className='write-review-input'>
            <ul>
              <li>
                <input type='radio' id='rating-1' value='1'/>
              </li>
              <li>
                <input type='radio' id='rating-2' value='2'/>
              </li>
              <li>
                <input type='radio' id='rating-3' value='3'/>
              </li>
              <li>
                <input type='radio' id='rating-4' value='4'/>
              </li>
              <li>
                <input type='radio' id='rating-5' value='5'/>
              </li>
            </ul>
            <textarea
              onChange={this.handleInput}
              value={this.state.body}
              placeholder="Your review helps others learn about great local businesses. &#10;Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default WriteReview;
