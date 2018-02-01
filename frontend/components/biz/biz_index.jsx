import React from 'react';
import BizIndexItem from './biz_index_item';

class BizIndex extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.requestAllBiz();
  }

  render(){
    const bizes = this.props.bizes;
    return(
      <div>
        <div className='search-banner'>
          <div>
            <div className='search-title'>
              <h1>Best Restaurants </h1><h1>in San Francisco, CA</h1>
            </div>
            <div className='filter-btn'>
              <div className='filter-price'>
                <ul>
                  <li>$</li>
                  <li>$$</li>
                  <li>$$$</li>
                  <li>$$$$</li>
                </ul>
              </div>
              <div className='filter-open-hour'>
                <ul>
                  <li><i className="fa fa-clock"></i>Open Now</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='index'>
          <div id='temp'>
            <i className="far fa-clock"></i>
            <i className="fa fa-clock"></i>
          </div>
          <ul>
            {bizes.map((biz, idx) => <BizIndexItem key={biz.id} biz={biz} idx={idx}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default BizIndex;
