import React from 'react';

class BizShowRating extends React.Component {
  componentDidMount(){
    const {biz} = this.props;
    const rate = document.getElementById(`biz-show-rating-${biz.id}`);
    const position = biz.biz_rate === 0 ? 0 : 48 * biz.biz_rate - 24;
    if (rate) {
      rate.style.backgroundPosition = `0 -${position}px`;
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.biz.biz_rate !== newProps.biz.biz_rate) {
      const {biz} = newProps;
      const rate = document.getElementById(`biz-show-rating-${biz.id}`);
      const position =biz.biz_rate === 0 ? 0 : 48 * biz.biz_rate - 24;
      if (rate) {
        rate.style.backgroundPosition = `0 -${position}px`;
      }
    }
  }

  render(){
    const {biz} = this.props;
    return(<div id={`biz-show-rating-${biz.id}`} className='biz-info-rating'></div>);
  }
}

export default BizShowRating;
