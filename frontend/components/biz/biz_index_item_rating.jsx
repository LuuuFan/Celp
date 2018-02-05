import React from 'react';

class BizIndexItemRating extends React.Component {
  componentDidMount(){
    const {biz} = this.props;
    const rate = document.getElementById(`biz-info-rating-${biz.id}`);
    const position = biz.biz_rate === 0 ? 240 : 222 + 36 * biz.biz_rate;
    if (rate) {
      rate.style.backgroundPosition = `0 -${position}px`;
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.biz.biz_rate !== newProps.biz.biz_rate) {
      const {biz} = newProps;
      const rate = document.getElementById(`biz-info-rating-${biz.id}`);
      const position =biz.biz_rate === 0 ? 240 : 222 + 36 * biz.biz_rate;
      if (rate) {
        rate.style.backgroundPosition = `0 -${position}px`;
      }
    }
  }

  render(){
    const {biz} = this.props;
    return(<div id={`biz-info-rating-${biz.id}`} className='biz-info-rating'></div>);
  }
}

export default BizIndexItemRating;
