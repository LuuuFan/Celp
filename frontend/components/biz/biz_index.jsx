import React from 'react';
import BizIndexItem from './biz_index_item';
import Map from '../map/map';
import ReactDOM from 'react-dom';

class BizIndex extends React.Component {
  constructor(){
    super();
    this.state = {loc: '', cat: '', key:''}
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    // ReactDOM.findDOMNode(this).scrollTop = 0;
    if (this.props.location.search.includes('key')) {
      let arr = this.props.location.search.split('&');
      let key = arr[0] ? arr[0].slice(5) : "";
      let loc = arr[1] ? arr[1].slice(4) : "";
      this.setState({cat:''});
      this.setState({loc: loc.split('+').join(' '), key: key});
      this.props.requestSearch(key, loc);
    } else if (this.props.location.search.includes('cat')) {
      this.setState({cat: this.props.location.search.slice(5)})
      this.props.requestCategory(this.props.location.search.slice(5));
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.location.search !== newProps.location.search) {
      if (newProps.location.search.includes('key')) {
        let arr = newProps.location.search.split('&');
        let key = arr[0] ? arr[0].slice(5) : "";
        let loc = arr[1] ? arr[1].slice(4) : "";
        this.setState({cat:''});
        this.setState({loc: loc.split('+').join(' '), key: key});
        this.props.requestSearch(key, loc);
      } else if (newProps.location.search.includes('cat')) {
        this.setState({cat: newProps.location.search.slice(5)})
        this.props.requestCategory(newProps.location.search.slice(5));
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
              <h1>Best {this.state.cat ? this.state.cat : this.state.key }</h1>
              <h1>{this.state.cat ? 'in San Francisco, CA' : <div>{this.state.loc ? `in ${this.state.loc}` : ''}</div>}</h1>
            </div>
            <div className='filter-btn'>
              <div className='filter-price'>
                <ul>
                  <li className='tooltip'>$<div className='tooltiptext'>under construction</div></li>
                  <li className='tooltip'>$$<div className='tooltiptext'>under construction</div></li>
                  <li className='tooltip'>$$$<div className='tooltiptext'>under construction</div></li>
                  <li className='tooltip'>$$$$<div className='tooltiptext'>under construction</div></li>
                </ul>
              </div>
              <div className='filter-open-hour'>
                <ul className='tooltip'>
                  <li><i className="far fa-clock"></i>Open Now</li>
                  <div className='tooltiptext'>under construction</div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='index'>
          <ul className='biz_index_list'>
            {bizes.map((biz, idx) => <BizIndexItem key={idx} biz={biz} idx={idx}/>)}
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
