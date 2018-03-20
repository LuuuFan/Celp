import React from 'react';
import {Link} from 'react-router-dom';
import BizIndexItemRating from './biz_index_item_rating';

class BizIndexItem extends React.Component {
  constructor(){
    super();
  }

  render(){
    const {biz, idx} = this.props;
    let review;
    if (biz.reviews_num > 1) {
      review = `${biz.reviews_num} Reviews`;
    } else if (biz.reviews_num) {
      review = `${biz.reviews_num} Review`;
    }


   return (
     <div className='biz_index_item'>
       {biz.img_url ?
        <div className='index-thumb'>
          <Link to={`/biz/${biz.id}`}>
            <img src={`${biz.img_url}`} />
          </Link>
        </div>
         :
        <div className='index-thumb'>
          <Link to={`/biz/${biz.id}`}>
            <img src='https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png' />
          </Link>
        </div>
       }
       <div className='biz-index-item-right'>
         <div className='biz-info'>
           <div className='biz-info-left'>
             <div className='biz-info-title'>
               <p>{idx + 1}.</p><Link to={`/biz/${biz.id}`}>{biz.name}</Link>
             </div>
             {biz.reviews_num ?
             <div className='biz-info-rate-review'>
               <BizIndexItemRating biz={biz}/>
               <div><p>{review}</p></div>
             </div>
             : ""}
             <div className='biz-info-price-tags'>
               <div className='biz-info-price'>
                 {biz.price ? <p>{biz.price}</p> : "No Price Reference Yet"}
               </div>
               {biz.tags && biz.tags.length > 0 ? <p>&middot;</p> : ""}
               {biz.tags && biz.tags.length > 0 ?
                 <div className='biz-info-tags'>
                   {biz.tags.map((tag, idx) => <p key={idx}><Link to={`/search?key=${tag}`}>{tag} </Link></p>)}
                 </div>
                 : ""}
             </div>
            {biz['bookmarked?'] ?
              <div className='biz-index-item-bookmarked'>
                <i className="fas fa-bookmark"></i><p>Bookmarked</p>
              </div>
             : ""}
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
         <div className='sample-review'>
           {biz.review_sample ?
             <div>
               <div className='sample-review-user-avatar'>
                 <img src={biz.review_sample.user_url}/>
               </div>
               <div className='sample-review-body group'>
                 <p>{biz.review_sample.body.slice(0, 160)}<a href={`/#/biz/${biz.id}`}>read more</a></p>
               </div>
             </div>
           : ""}
         </div>
       </div>
     </div>
   );
  }
}

export default BizIndexItem;
