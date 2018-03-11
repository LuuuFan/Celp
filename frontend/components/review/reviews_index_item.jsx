import React from 'react';
import { Link } from 'react-router-dom';
import ReviewsIndexItemRating from './reviews_index_item_rating';

class ReviewsIndexItem extends React.Component {
  constructor(){
    super();
    this.state = {className: 'modal'};
  }

  handleClick(e, id){
    e.preventDefault();
    this.props.deleteReview(id);
    this.setState({className: 'modal'});
  }

  showDelete(e){
    e.preventDefault();
    if (e.target.classList.value !== 'modal-screen') {
      this.setState({className: 'is-open'});
    }
  }

  closeDelete(e){
    e.preventDefault();
    this.setState({className: 'modal'});
  }

  reviewTag(e, tag){
    if (e.target.className === '') {
      this.props.createReviewTag(this.props.review.id, tag)
    } else {
      this.props.deleteReviewTag(this.props.review.id, tag)
    }
  }

  // mouseOver(id){
  //   const reviewTable = document.getElementById(`review-table-${id}`);
  //   reviewTable.classList.remove('hidden');
  // }
  //
  // mouseOut(id){
  //   const reviewTable = document.getElementById(`review-table-${id}`);
  //   reviewTable.classList.add('hidden');
  // }

// onMouseOut={()=>this.mouseOut(review.id)} onMouseOver={()=>this.mouseOver(review.id)}

  render(){
    const {review, currentUser, deleteReview, users} = this.props;
    return (
      <div>
      {review && users[review.user_id] ?
        <div className='reviews-index-item'>
          <div className='review-user'>
            <div className='review-user-info'>
              <div className='review-user-avatar'>
                <img src={users[review.user_id].avatar_url}/>
              </div>
              <div className='review-user-info'>
                <ul>
                  <li><Link to={`/user/${users[review.user_id].username}`}>{users[review.user_id].username}</Link></li>
                  <li>San Francisco, CA</li>
                  {users[review.user_id].user_review_num > 1 ?
                    <li><strong>{users[review.user_id].user_review_num}</strong> reviews</li>
                  : <li><strong>1</strong> review</li>
                  }
                </ul>
              </div>
            </div>
            <div id={`review-table-${review.id}`} className='review-table'>
              <table>
                <tbody>
                  <tr><th><i className="fas fa-share-square"></i></th><td>Share Review</td></tr>
                  <tr><th><i className="fas fa-code"></i></th><td>Embed Review</td></tr>
                  {currentUser && review.user_id === currentUser.id ?
                  <tr><th><i className="fas fa-pencil-alt"></i></th><td><a href={`/#/update_review/biz/${review.biz_id}`}>Edit Review</a></td></tr>
                  : <tr><th></th><td></td></tr>}
                </tbody>
              </table>
            </div>
          </div>
          <div className='review-info'>
            <div className='review-info-rate-time'>
              <ReviewsIndexItemRating review={review}/>
              <p>{review.updated_at.slice(0, 10)}</p>
            </div>
            <div className='review-info-body'>
              <p>{review.body}</p>
              { currentUser && review.user_id === currentUser.id ?
                <div className='review-status'>
                  <div onClick={(e)=>this.showDelete(e)} className='deleteReview'><i className="fas fa-trash-alt"></i></div>
                </div>
              :
                <div className='review-status'>
                  <p>Was this review ...?</p>
                  <div>
                    <ul className='group'>
                      <li onClick={(e)=>this.reviewTag(e, 'userful')} className={this.props.review.is_tagged_by_user.includes('userful') ? 'tagged' : ""}><i className="fas fa-lightbulb"></i>Userful</li>
                      <li onClick={(e)=>this.reviewTag(e, 'funny')} className={this.props.review.is_tagged_by_user.includes('funny') ? 'tagged' : ""}><i className="far fa-smile"></i>Funny</li>
                      <li onClick={(e)=>this.reviewTag(e, 'cool')} className={this.props.review.is_tagged_by_user.includes('cool') ? 'tagged' : ""}><i className="far fa-hand-peace"></i>Cool</li>
                    </ul>
                    <div className='report-review tooltip'><i className="fas fa-flag"></i><div className='tooltiptext'>under construction</div></div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        : ""}
        <div className={this.state.className} id={`modal-${review.id}`}>
          <div className='delete-confirmation'>
            <div>
              <h1>Confirmation</h1>
                <div onClick={(e)=>this.closeDelete(e)}>
                  <span>&times;</span>
                </div>
            </div>
            <p>Are you sure you would like to delete this review?</p>
            <div>
              <button onClick={(e)=>this.handleClick(e, review.id)}>Yes</button>
              <button onClick={(e)=>this.closeDelete(e)}>No</button>
            </div>
          </div>
          <div onClick={(e)=>this.closeDelete(e)} className='modal-screen'>
          </div>
        </div>
      </div>
    );
  }
};

export default ReviewsIndexItem;
