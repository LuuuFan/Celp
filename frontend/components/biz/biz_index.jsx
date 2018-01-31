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
        <ul>
          {bizes.map(biz => <BizIndexItem key={biz.id} biz={biz} />)}
        </ul>
      </div>
    );
  }
}

export default BizIndex;
