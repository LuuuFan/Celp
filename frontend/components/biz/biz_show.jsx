import React from 'react';

class BizShow extends React.Component {

  componentDidMount(){
    this.props.requestBiz(this.props.match.params.bizId);
  }

  componentWillReceiveProps(newProps){
    if (!this.props.biz) {
      this.props.requestBiz(this.props.match.params.bizId);
    }
  }

  render(){
    const {biz} = this.props;
    return(
      <div>
        <div className='biz-show'>
          { biz ? (
            <div>
              <h1>{biz.name}</h1>
              <div className='biz-info-rating'>
              </div>
              <div className='biz-info-price'>
                <p>{biz.price}</p>
              </div>
              <div className='biz-info-tags'>
                <p><a>Bakery</a>, <a>Cake</a></p>
              </div>
            </div>
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default BizShow;
