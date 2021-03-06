import React from 'react';
import BizImgIndexItem from './biz_img_index_item';
import {Link} from 'react-router-dom';
import Loading from '../loading';

class BizImgIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllImg(this.props.match.params.bizId);
  }

  render(){
    const {imgs, currentUser, deleteImg} = this.props;
    return (
      <div className='biz-all-imgs'>
        { this.props.imgs.length > 0 ?
          <div>
            <h1>Photos for {imgs[0].biz}</h1>
            <div className='biz-all-imgs-title'>
              <div>
                <div className='biz-all-imgs-title-img'>
                  <img src={`${imgs[0].biz_img_url}`} />
                </div>
                <div className='biz-all-imgs-title-biz-name'>
                  <Link to={`/biz/${this.props.match.params.bizId}`}>
                    {imgs[0].biz}
                  </Link>
                </div>
            </div>
              <Link to={`/biz/${this.props.match.params.bizId}/addphoto`}>
                <button><i className="fas fa-camera"></i>Add photos</button>
              </Link>
            </div>
            <div className='group'>
              {imgs.map((img, idx) => <BizImgIndexItem
                key={idx}
                bizId={this.props.match.params.bizId}
                currentUser={currentUser}
                img={img}
                deleteImg={deleteImg}
                cover={imgs[0].biz_img_url}/>)}
            </div>
          </div>
           :
          <Loading />
        }
      </div>
    );
  }
}

export default BizImgIndex;
