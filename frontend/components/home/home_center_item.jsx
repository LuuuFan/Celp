import React from 'react';
import BizIndexItemRating from '../biz/biz_index_item_rating';

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
                <a href={`/#/biz/${biz.id}`}><h1>{biz.name}</h1></a>
              </div>
              <div className='home-ceter-item-biz-info-rating-review'>
                <BizIndexItemRating biz={biz}/>
                <p>{biz.reviews_num} {biz.reviews_num > 1 ? 'reviews' : 'review'}</p>
              </div>
              <div className='biz-info-price-tags'>
                <div className='biz-info-price'>
                  <p>{biz.price}</p>
                </div>
                <p>&middot;</p>
                <div className='biz-info-tags'>
                  <p>Bakery, Cake</p>
                </div>
              </div>
              <p>{biz.location.city}</p>
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
