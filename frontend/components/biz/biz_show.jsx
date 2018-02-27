import React from 'react';
import BizShowImg from '../img/biz_show_img';
import ReviewsIndex from '../review/reviews_index';
import { Route, Link } from 'react-router-dom';
import Loading from '../loading';
import BizShowRating from './biz_show_rating';
import Map from '../map/map';
import BizShowBookmarkContainer from './biz_show_bookmark_container';
import BizIndexItemRating from './biz_index_item_rating';


class BizShow extends React.Component {
  constructor(){
    super();
    this.state = {className: 'modal'};
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.requestBiz(this.props.match.params.bizId);
  }

  componentWillReceiveProps(newProps){
    if (!this.props.biz
        || this.props.match.params.bizId !== newProps.match.params.bizId
        || this.props.reviews.length !== newProps.reviews.length
      ) {
      this.props.requestBiz(newProps.match.params.bizId);
    }
  }

  onpenModal(){
    this.setState({className: 'is-open'});
  }

  closeModal(e){
    e.preventDefault();
    this.setState({className: 'modal'});
  }

  render(){
    const {bizEnoughInfo, biz, imgs, reviews, users, currentUser, deleteReview} = this.props;
    return(
      <div>
        <div className='biz-show'>
          { bizEnoughInfo ? (
            <div className='biz-show-detail'>
              <div className='biz-show-top'>
                <div className='biz-show-left-top'>
                  <h1>{biz.name}</h1>
                  <div className='biz-show-rating-number'>
                    <BizShowRating biz={biz}/>
                    {biz.total_reviews > 1 ?
                      <p>{biz.total_reviews} reviews</p>
                      :
                      <p>{biz.total_reviews === 1 ? "1 review" : '0 review'}</p>}
                  </div>
                  <div className='biz-info-price-tags'>
                    <div className='biz-info-price'>
                      {biz.price ? <p>{biz.price}</p> : "$$"}
                    </div>
                    {biz.tags && biz.tags.length > 0 ? <p>&middot;</p> : ""}
                    {biz.tags && biz.tags.length > 0 ?
                      <div className='biz-info-tags'>
                        {biz.tags.map((tag, idx) => <p key={idx}><Link to={`/search?key=${tag}`}>{tag} </Link></p>)}
                      </div>
                      : ""}
                  </div>
                </div>
                <div className='biz-show-right-top'>
                  { currentUser && biz.user_ids && biz.user_ids.includes(currentUser.id) ?
                    <Link to={`/update_review/biz/${biz.id}`}>
                      <button className='writeReview'>
                        <p>
                          <i className="fas fa-star"></i>
                          Update your Review
                        </p>
                      </button>
                    </Link>
                  :
                    <Link to={`/write_review/biz/${biz.id}`}>
                      <button className='writeReview'>
                        <p>
                          <i className="fas fa-star"></i>
                          Write a Review
                        </p>
                      </button>
                    </Link>
                  }
                  <ul>
                    <a href={`/#/biz/${biz.id}/addphoto`}><li><i className="fas fa-camera"></i>Add Photo</li></a>
                    <li><i className="fas fa-share-square"></i>Share</li>
                    <Route component={BizShowBookmarkContainer} />
                  </ul>
                </div>
              </div>
              <div className='biz-show-bottom'>
                <div className='biz-show-left-bottom'>
                  <div className='biz-show-map'>
                    <Map biz={biz}/>
                  </div>
                  <div className='biz-show-left-bottom-detail'>
                    <div>
                      <div className='biz-show-info'>
                        <table>
                          <tbody>
                            <tr>
                              <th><i className="fas fa-map-marker"></i></th>
                              <td>
                                {biz.location.address1}
                                <br/>
                                { biz.location.address2 ? <p>{biz.location.address2}<br/></p> : ""}
                                {biz.location.city}, &nbsp;{biz.location.state} &nbsp;{biz.location.zipcode}
                              </td>
                            </tr>
                            <tr>
                              <th><i className="far fa-compass"></i></th>
                              <td><a>Get Directions</a></td></tr>
                            <tr>
                              <th><i className="fas fa-phone"></i></th>
                              <td>{biz.phone}</td>
                            </tr>
                            <tr>
                              <th><i className="fas fa-home"></i></th>
                              <td>
                                { biz.website ?
                                  <a href={`http://${biz.website}`}>{biz.website}</a>
                                  :
                                  <a href={`/#/biz/${biz.id}`}>celp.com</a>
                                }
                              </td>
                            </tr>
                            <tr>
                              <th><i className="fas fa-mobile-alt"></i></th>
                              <td><a onClick={()=>this.onpenModal()}>Send to your Phone</a></td>
                            </tr>
                          </tbody>
                        </table>
                        <div className='biz-show-edit'>
                          {/*
                          <i className="fas fa-pencil-alt"></i>
                          <span>Edit</span>
                          */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BizShowImg imgs={imgs} biz={biz} />
              </div>
              <div className={this.state.className} id='send-sms'>
                <div className='biz-show-sms'>
                  <div className='biz-show-sms-header'>
                    <h1>Text to Phone</h1>
                      <div onClick={(e)=>this.closeModal(e)}>
                        <span>&times;</span>
                      </div>
                  </div>
                  <div className='biz_index_item'>
                    {biz.img_url ?
                     <div className='index-thumb'>
                       <Link to={`/biz/${biz.id}`}  target="_blank">
                         <img src={`${biz.img_url}`} />
                       </Link>
                     </div>
                      :
                     <div className='index-thumb'>
                       <Link to={`/biz/${biz.id}`}  target="_blank">
                         <img src='https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png' />
                       </Link>
                     </div>
                    }
                    <div className='biz-index-item-right'>
                      <div className='biz-info'>
                        <div className='biz-info-left'>
                          <div className='biz-info-title'>
                            <Link to={`/biz/${biz.id}`}  target="_blank">{biz.name}</Link>
                          </div>
                          {biz.review_ids && biz.review_ids.length > 0 ?
                          <div className='biz-info-rate-review'>
                            <BizIndexItemRating biz={biz}/>
                            {biz.review_ids.length == 1 ? <p>1 review</p> : <p>{biz.review_ids.length} reviews</p>}
                          </div>
                          : ""}
                          <div className='biz-info-price-tags'>
                            <div className='biz-info-price'>
                              {biz.price ? <p>{biz.price}</p> : "$$"}
                            </div>
                            {biz.tags && biz.tags.length > 0 ? <p>&middot;</p> : ""}
                            {biz.tags && biz.tags.length > 0 ?
                              <div className='biz-info-tags'>
                                {biz.tags.map((tag, idx) => <p key={idx}><Link to={`/search?key=${tag}`}>{tag} </Link></p>)}
                              </div>
                              : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    Text a link to your phone so you can quickly get directions, see photos, and read reviews on the go!
                  </div>
                  <form className='send-sms-phone-number'>
                    <div>
                      <input value= '+1'/>
                      <input type='text' placeholder='Phone Number'/>
                    </div>
                    <input type='submit' value='Text Link' />
                  </form>
                  <p>Your carrier's rates may apply</p>
                </div>
                <div onClick={(e)=>this.closeModal(e)} className='modal-screen'>
                </div>
              </div>
            </div>
          ) : <Loading />}
        </div>
        <div>
          {bizEnoughInfo && reviews ?
              <ReviewsIndex
                reviews={reviews}
                users={users}
                currentUser={currentUser}
                deleteReview={deleteReview}
                biz={biz} />
          : ""}
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
