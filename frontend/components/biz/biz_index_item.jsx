import React from 'react';
import {Link} from 'react-router-dom';

const BizIndexItem = ({biz, idx}) => {
 return (
   <div className='biz_index_item'>
     <img src='https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png' />
     <div className='biz-info'>
       <div className='biz-info-left'>
         <div className='biz-info-title'>
           <p>{idx + 1}.</p><Link to={`/biz/${biz.id}`}>{biz.name}</Link>
         </div>
         <div className='biz-info-rating'>

         </div>
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
