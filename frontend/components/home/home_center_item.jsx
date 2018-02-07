import React from 'react';

class HomeCenterItem extends React.Component{

  render(){
    const {biz} = this.props;
    return(
      <div className='home-center-item'>
        {biz ?
          <h1>{biz.name}</h1>
          : ""}
      </div>
    );
  }
}

export default HomeCenterItem;
