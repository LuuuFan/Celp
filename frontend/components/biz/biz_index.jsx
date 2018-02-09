import React from 'react';
import BizIndexItem from './biz_index_item';
import Map from '../map/map';

class BizIndex extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    if (this.props.location.search.includes('key')) {
      let arr = this.props.location.search.split('&');
      let key = arr[0] ? arr[0].slice(5) : "";
      let loc = arr[1] ? arr[1].slice(4) : "";
      this.props.requestSearch(key, loc);
    } else if (this.props.location.search.includes('cat')) {
      this.props.requestCategory(this.props.location.search.slice(5));
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.location.search !== newProps.location.search) {
      if (newProps.location.search.includes('cat')) {
        this.props.requestCategory(newProps.location.search.slice(5));
      } else if (newProps.location.search.includes('key')) {
        let arr = newProps.location.search.split('&');
        let key = arr[0] ? arr[0].slice(5) : "";
        let loc = arr[1] ? arr[1].slice(4) : "";
        this.props.requestSearch(key, loc);
      }
    }
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
                  <li><i className="far fa-clock"></i>Open Now</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='index'>
          <ul className='biz_index_list'>
            {bizes.map((biz, idx) => <BizIndexItem key={biz.id} biz={biz} idx={idx}/>)}
          </ul>
          <div className='biz-index-map'>
            <Map bizes={bizes} />
          </div>
        </div>
      </div>
    );
  }
}

export default BizIndex;
