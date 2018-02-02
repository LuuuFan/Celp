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

  mouseOver(){
    const img = document.getElementById("biz-show-img-2");
    // debugger
    img.classList.remove(".biz-show-img-zoom");
  }

  render(){
    const {biz, imgs} = this.props;
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
                      <i className="fas fa-star"></i>
                      Write a Review
                    </p>
                  </button>
                  <ul>
                    <a href={`/#/biz/${biz.id}/addphoto`}><li><i className="fas fa-camera"></i>Add Photo</li></a>
                    <li><i className="fas fa-share-square"></i>Share</li>
                    <li><i className="fas fa-bookmark"></i>Bookmark</li>
                  </ul>
                </div>
              </div>
              <div className='biz-show-bottom'>
                <div className='biz-show-left-bottom'>
                  <img className='biz-show-map' src='https://maps.googleapis.com/maps/api/staticmap?scale=2&center=37.798470%2C-122.407051&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C37.798470%2C-122.407051&client=gme-yelp&sensor=false&size=286x135&signature=7mQXep0kYDegNJB7m85dVwicCL0=' />
                  <div className='biz-show-left-bottom-detail'>
                    <div>
                      <div className='biz-show-info'>
                        <div className='biz-show-info-icon'>
                          <i className="fas fa-map-marker"></i>
                          <i className="far fa-compass"></i>
                          <i className="fas fa-phone"></i>
                          <i className="fas fa-home"></i>
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className='biz-show-info-text'>
                          <div className='biz-show-address'>
                            {biz.location.address1}
                            <br/>
                            { biz.location.address2 ? <p>{biz.location.address2}<br/></p> : ""}
                            {biz.location.city}, &nbsp;{biz.location.state} &nbsp;{biz.location.zipcode}
                          </div>
                          <a href=''>Get Directions</a>
                          {biz.phone}
                          <br/>
                          {biz.website ? biz.website: <a href={`/#/biz/${biz.id}`}>celp.com</a> }
                          <a href=''>Send to your Phone</a>
                        </div>

                        <div className='biz-show-edit'>
                          <i className="fas fa-pencil-alt"></i>
                          <span>Edit</span>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
                <div className='biz-show-right-bottom'>
                  <div className='biz-show-img'>
                    { imgs.length > 0 ? (
                      <div>
                        { imgs.map((img, idx) =>
                          <div key={idx} onMouseOver={()=>this.mouseOver()} className='thumb' id={`biz-show-img-${idx}`}>
                            <img  src={img.url} />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className='biz-show-no-img'>
                        <a href={`/#/biz/${biz.id}/addphoto`}><div><i className="fas fa-camera"></i>Add Photo</div></a>
                      </div>
                    )}
                  </div>
                  { imgs.length > 0 ? (<div className='biz-show-more-img'>
                    <i className="far fa-images"></i><a>See all 000</a>
                  </div>) : ""}

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

// <div className='thumb biz-show-img-zoom' id='biz-show-img-2'>
//   <img src='https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/1487994_10202453162466067_1183927869_o.jpg?oh=965e3bb005bd86a4858fe85048640aed&oe=5AEAEB97' />
// </div>
// <div onMouseOver={()=>this.mouseOver()} className='thumb' id='biz-show-img-3'>
//   <img src='https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/1501349_10202453168466217_804954821_o.jpg?oh=fcb423a163691b33856b052bb38dfe24&oe=5ADDCFDB' />
// </div>
