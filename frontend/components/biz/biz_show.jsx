import React from 'react';
import BizShowImg from '../img/biz_show_img';
import ReviewsIndex from '../review/reviews_index';
import { Route, Link } from 'react-router-dom';
import Loading from '../loading';
import BizShowRating from './biz_show_rating';
import Map from '../map/map';
import BizShowBookmarkContainer from './biz_show_bookmark_container';

class BizShow extends React.Component {

  componentDidMount(){
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

  render(){
    const {biz, imgs, reviews, users, currentUser, deleteReview} = this.props;
    return(
      <div>
        <div className='biz-show'>
          { biz ? (
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
                      <p>{biz.price}</p>
                    </div>
                    <p>&middot;</p>
                    <div className='biz-info-tags'>
                      <p><a>Bakery</a>, <a>Cake</a></p>
                    </div>
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
                              <td><a href=''>Get Directions</a></td></tr>
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
                              <td><a href=''>Send to your Phone</a></td>
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
            </div>
          ) : <Loading />}
        </div>
        <div>
          {biz && reviews ?
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
