import React from 'react';

class BizImgIndexItem extends React.Component{

  constructor(){
    super();
    this.state = {className: 'modal'};
  }

  showImg(e){
    e.preventDefault();
    if (e.target.classList.value !== 'modal-screen') {
      this.setState({className: 'is-open'});
    }
  }

  closeShowImg(e){
    e.preventDefault();
    this.setState({className: 'modal'});
  }


  render(){
    const {img, cover, bizId} = this.props;
    return (
      <div onClick={(e)=>this.showImg(e)} className='img-item'>
        { img ? <img onClick={(e)=>this.showImg(e)} src={img.url}/> : ""}
        <div className={this.state.className} id={`modal-${img.id}`}>
          <div className='img-show'>
            <div onClick={(e)=>this.closeShowImg(e)} className='modal-close'>
              <span>&times;</span>
            </div>
            <div className='modal-img-show'>
              <img src={img.url} />
            </div>
            <div className='modal-img-show-description'>
              <div>
                <div className="biz-all-imgs-title-img">
                  <img src={cover.url} />
                </div>
                <div>
                  <a href={`/#/biz/${bizId}`}>{img.biz}</a>
                  <p>From {img.user}</p>
                </div>
              </div>
              <div className='img-description'>
                <p>{img.description}</p>
              </div>
            </div>
          </div>
          <div onClick={(e)=>this.closeShowImg(e)} className='modal-screen'>
          </div>
        </div>

      </div>
    );
  }
}

export default BizImgIndexItem;
