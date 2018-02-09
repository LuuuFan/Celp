import React from 'react';
import BizIndexItemRating from '../biz/biz_index_item_rating';
import {Link} from 'react-router-dom';

class HomeCenterItem extends React.Component{

  render(){
    const {biz} = this.props;
    return(
      <div className='home-center-item'>
        {biz ?
          <div>
            <div className='home-center-item-img'>
              {biz.img_url ?
                <img src={biz.img_url} />
              :
                <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1517604984/celp/IMG_0531_id5npe.jpg' />
              }
            </div>
            <div className='home-center-item-biz-info'>
              <div className='home-center-item-biz-name'>
                <Link to={`/biz/${biz.id}`}><h1>{biz.name}</h1></Link>
              </div>
              <div className='home-ceter-item-biz-info-rating-review'>
                <BizIndexItemRating biz={biz}/>
                <p>{biz.reviews_num} {biz.reviews_num > 1 ? 'reviews' : 'review'}</p>
              </div>
              <div className='biz-info-price-tags'>
                <div className='biz-info-price'>
                  {biz.price ? <p>{biz.price}</p> : "$$"}
                </div>
                {biz.tags && biz.tags.length > 0 ? <p>&middot;</p> : ""}
                {biz.tags && biz.tags.length > 0 ?
                  <div className='biz-info-tags'>
                    {biz.tags.map(tag => <p><Link href={`/search?key=${tag}`}>{tag} </Link></p>)}
                  </div>
                 : ""}
              </div>
              {biz.location.city ? <p>{biz.location.city}</p> : ""}
              <div className='home-center-item-biz-hot'>
                <i className="fas fa-fire"></i><p>Hot place</p>
              </div>
            </div>
          </div>
          : ""}
      </div>
    );
  }
}

export default HomeCenterItem;
