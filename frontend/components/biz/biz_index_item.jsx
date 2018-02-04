import React from 'react';
import {Link} from 'react-router-dom';

const BizIndexItem = ({biz, idx}) => {
  let review;
  if (biz.reviews_num > 1) {
    review = `${biz.reviews_num} Reviews`;
  } else if (biz.reviews_num) {
    review = `${biz.reviews_num} Review`;
  }

 return (
   <div className='biz_index_item'>
     {biz.img_url ?
      <div className='index-thumb'><img src={`${biz.img_url}`} /></div>
       :
      <div className='index-thumb'>
        <img src='https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png' />
      </div>
     }
     <div className='biz-info'>
       <div className='biz-info-left'>
         <div className='biz-info-title'>
           <p>{idx + 1}.</p><Link to={`/biz/${biz.id}`}>{biz.name}</Link>
         </div>
         {biz.reviews_num ?
         <div className='biz-info-rate-review'>
           <div className='biz-info-rating'></div>
           <p>{review}</p>
         </div>
         : ""}
         <div className='biz-info-price-tags'>
           <div className='biz-info-price'>
             <p>{biz.price}</p>
           </div>
           <p>&middot;</p>
           <div className='biz-info-tags'>
             <p><a>Bakery</a>, <a>Cake</a></p>
           </div>
         </div>
       </div>
       <div className='biz-info-right'>
         <div className='biz-info-address'>
           {biz.display_address}
         </div>
         <div className='biz-info-phone'>
           <p>{biz.phone}</p>
         </div>
       </div>
     </div>
   </div>
 );
}


export default BizIndexItem;
