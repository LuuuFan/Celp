import React from 'react';


class BizShowImgItem extends React.Component {
  constructor(){
    super();
    this.state = {className: 'modal'};
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
  //
  // handleDelete(imgId){
  //   const {bizId} = this.props;
  //   this.props.deleteImg(imgId)
  //     .then(()=>{
  //         this.setState({className: 'modal'});
  //       }
  //     );
  // }

  escImg(e){
    // Debugger
    if (e.keyCode == 27) {
      this.closeShowImg(e);
    }
  }

  render(){
    const {img, biz, currentUser} = this.props;
    return(
      <div>
        <img className='biz-show-img-item' onClick={(e)=>this.showImg(e)} src={img.url} />
        <div className={`${this.state.className} biz-show-img-item-modal`}>
          <div className='img-show'>
            <img src={img.url} />
            <div className='close-modal' onClick={(e)=>this.closeShowImg(e)}>
              <span>&times;</span>
            </div>
          </div>
          <div onKeyPress={(e)=>this.escImg(e)} onClick={(e)=>this.closeShowImg(e)} className='modal-screen'>
          </div>
        </div>
      </div>
    );
  }
}

export default BizShowImgItem;

// <div className='modal-img-show-description'>
//   <div>
//     <div className="biz-all-imgs-title-img">
//       <img/>
//     </div>
//     <div>
//       <a href={`#/biz/${biz.id}`}>{img.biz}</a>
//       <p>From {img.user}</p>
//     </div>
//     <div className='close-modal' onClick={(e)=>this.closeShowImg(e)}>
//       <span>&times;</span>
//     </div>
//   </div>
//   <div className='img-description'>
//     <p>{img.description}</p>
//   </div>
//   {currentUser && img.user_id === currentUser.id ?
//     <table className='img-description-table'>
//       <tbody>
//         <tr>
//           <th><i className="far fa-trash-alt"></i></th>
//           <td onClick={()=>this.handleDelete(img.id)}>Delete photo</td>
//         </tr>
//       </tbody>
//     </table>
//     : ""}
//   {img && img.created_at ?
//     <div className='img-description-created-at'>{img.created_at.slice(0, 10)}</div>
//   : ""}
// </div>
