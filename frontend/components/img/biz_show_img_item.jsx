import React from 'react';

class BizShowImgItem extends React.Component {
  constructor(){
    super();
  }

  render(){
    const {img} = this.props;
    return(
      <div>
        <img src={img.url} />
      </div>
    );
  }
}

export default BizShowImgItem;
