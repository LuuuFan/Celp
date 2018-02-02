import React from 'react';

class BizImgIndexItem extends React.Component{

  constructor(){
    super();
    this.state = {className: 'modal'};
  }

  showImg(e){
    e.preventDefault();
    const modal = document.getElementById(`modal-${this.props.img.id}`);
    // $(`#modal-${this.props.img.id}`).addClass('is-open');
    this.setState({className: 'is-open'});
  }

  closeShowImg(e){
    e.preventDefault();
    // $(`#modal-${this.props.img.id}`).removeClass('is-open');
    const modal = document.getElementById(`modal-${this.props.img.id}`);
    debugger
    this.setState({className: 'modal'});
  }


  render(){
    const {img} = this.props;
    return (
      <div onClick={(e)=>this.showImg(e)} className='img-item'>
        { img ? <img onClick={(e)=>this.showImg(e)} src={img.url}/> : ""}
        <div className={this.state.className} id={`modal-${img.id}`}>
          <div className='modal-img-show'>
          </div>
          <div onClick={(e)=>this.closeShowImg(e)} className='modal-screen'>
          </div>
        </div>

      </div>
    );
  }
}

export default BizImgIndexItem;
