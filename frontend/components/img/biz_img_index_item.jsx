import React from 'react';

class BizImgIndexItem extends React.Component{

  constructor(){
    super();
    this.state = {className: 'modal'};
  }

  componentDidUpdate(){
    $(document).keydown((e)=>{
      if (e.keyCode == 27) {
        this.closeShowImg(e);
      }
    });
  }


  showImg(e){
    e.preventDefault();
    if (e.target.tagName === 'IMG') {
      this.setState({className: 'is-open'});
    }
  }

  closeShowImg(e){
    e.preventDefault();
    this.setState({className: 'modal'});
  }

  handleDelete(imgId){
    const {bizId} = this.props;
    this.props.deleteImg(imgId)
      .then(()=>{
          this.setState({className: 'modal'});
        }
      );
  }

  render(){
    const {img, cover, bizId, currentUser} = this.props;
    return (
      <div className='img-item'>
        { img ? <img onClick={(e)=>this.showImg(e)} src={img.url}/> : ""}
        <div className={this.state.className} id={`modal-${img.id}`}>
          <div className='img-show'>
            <div className='modal-img-show'>
              <img src={img.url} />
            </div>
            <div className='modal-img-show-description'>
              <div>
                <div className="biz-all-imgs-title-img">
                  <img src={cover} />
                </div>
                <div>
                  <a href={`#/biz/${bizId}`}>{img.biz}</a>
                  <p>From {img.user}</p>
                </div>
                <div className='close-modal' onClick={(e)=>this.closeShowImg(e)}>
                  <span>&times;</span>
                </div>
              </div>
              <div className='img-description'>
                <p>{img.description}</p>
              </div>
              {currentUser && img.user_id === currentUser.id ?
                <table className='img-description-table'>
                  <tbody>
                    <tr>
                      <th><i className="far fa-trash-alt"></i></th>
                      <td onClick={()=>this.handleDelete(img.id)}>Delete photo</td>
                    </tr>
                  </tbody>
                </table>
                : ""}
              {img && img.created_at ?
                <div className='img-description-created-at'>{img.created_at.slice(0, 10)}</div>
              : ""}
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
