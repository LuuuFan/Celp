import React from 'react';

class BizShow extends React.Component {

  componentDidMount(){
    this.props.requestBiz(this.props.match.params.bizId);
  }

  componentWillReceiveProps(newProps){
    if (!this.props.biz) {
      this.props.requestBiz(this.props.match.params.bizId);
    }
  }

  render(){
    const {biz} = this.props;
    return(
      <div>
        <div className='biz-show'>
          { biz ? (
            <div className='biz-show-detail'>
              <div className='biz-show-top'>
                <div className='biz-show-left-top'>
                  <h1>{biz.name}</h1>
                  <div className='biz-show-rating-number'>
                    <div className='biz-info-rating'>
                    </div>
                    <p>0000 reviews</p>
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
                <div className='biz-show-right-top'>
                  <button className='writeReview'>
                    <p>
                      <i class="fas fa-star"></i>
                      Write a Review
                    </p>
                  </button>
                  <ul>
                    <li><i class="fas fa-camera"></i>Add Photo</li>
                    <li><i class="fas fa-share-square"></i>Share</li>
                    <li><i class="fas fa-bookmark"></i>Bookmark</li>
                  </ul>
                </div>
              </div>
              <div className='biz-show-bottom'>
                <div className='biz-show-left-bottom'>
                <img className='biz-show-map' src='https://maps.googleapis.com/maps/api/staticmap?scale=2&center=37.798470%2C-122.407051&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C37.798470%2C-122.407051&client=gme-yelp&sensor=false&size=286x135&signature=7mQXep0kYDegNJB7m85dVwicCL0=' />
                <div className='biz-show-left-bottom-detail'>
                  <div className='biz-show-address'>{biz.display_address}</div>
                  <div className='biz-show-phone'>{biz.phone}</div>
                  <div className='biz-show-website'></div>
                </div>
              </div>
                <div className='biz-show-right-bottom'>
                <img id='biz-show-img-1' src='' />
                <img id='biz-show-img-2' src='' />
                <img id='biz-show-img-3' src='' />
              </div>
              </div>
            </div>
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default BizShow;
