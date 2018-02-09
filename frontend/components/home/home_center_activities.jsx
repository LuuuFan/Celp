import React from 'react';

class HomeCenterActivities extends React.Component {
  constructor (props){
    super(props);
    this.state = {};
  }

  render(){

    return (
      <div className='home-center-recent-activity'>
        <h1>Recent Activity</h1>
          <ul>
            <div>
              <li className='tooltip'>Nearby<div className='tooltiptext'>under construction</div></li>
              <li className='tooltip'>Friends<div className='tooltiptext'>under construction</div></li>
              <li className='tooltip'>Following<div className='tooltiptext'>under construction</div></li>
            </div>
          </ul>
          <div className='home-center-activities group'>
            <div className='home-center-activity-item'>
              <div className='home-center-activity-item-user'>
                <div className='activity-item-avatar'>
                  <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1517865922/celp/1517951_10202453119865002_502589953_o_qngm10.jpg' />
                </div>
                <div>
                  <a href='https://celp.herokuapp.com/#/user/night'><h2>night</h2></a>
                  <p>Added 2 photos</p>
                </div>
              </div>
              <div className='activity-item-biz'>
                <a href='https://celp.herokuapp.com/#/biz/41/'><h2>Sungrass Bakery</h2></a>
                <div className='activity-two-photo-container'>
                  <div className='activity-one-of-two-photo'>
                    <div>
                      <img src='http://res.cloudinary.com/ddwejrtgh/image/upload/v1518152703/celp/IMG_6974_ci5qep.jpg'/>
                    </div>
                    <div className='tooltip'>
                      <i className="far fa-thumbs-up"></i>Like
                      <div className='tooltiptext'>under construction</div>
                    </div>
                  </div>
                  <div className='activity-one-of-two-photo'>
                    <div>
                      <img src='http://res.cloudinary.com/ddwejrtgh/image/upload/v1518152650/celp/IMG_8181_wezxkw.jpg'/>
                    </div>
                    <div className='tooltip'>
                      <i className="far fa-thumbs-up"></i>Like
                      <div className='tooltiptext'>under construction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='home-center-activity-item'>
              <div className='home-center-activity-item-user'>
                <div className='activity-item-avatar'>
                  <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1517865985/celp/323463_2651367759148_317015209_o_ywnmvb.jpg' />
                </div>
                <div>
                  <a href='https://celp.herokuapp.com/#/user/luufan'><h2>luufan</h2></a>
                  <p>Wrote a review</p>
                </div>
              </div>
              <div className='activity-item-biz'>
                <div className='activity-item-biz-img'>
                  <img src='http://res.cloudinary.com/ddwejrtgh/image/upload/v1518141662/celp/o_llfg8s.png'/>
                </div>
                <a href='https://celp.herokuapp.com/#/biz/48/'><h2>App Academy</h2></a>
                <div className='activity-item-biz-review'>
                  <p>I was once in your shoes looking to see if App Academy was the right bootcamp for me. Well, you're in luck. I'm going to spend the next ten minutes giving you a quick rundown on my thoughts on this program. A quick note of disclosure, I will be  receiving an a/A branded sweater for posting a review but fear not, that review is completely unbiased and independent of that.
                  </p>
                </div>
                <a href='https://celp.herokuapp.com/#/biz/48/'>Continue reading</a>
              </div>
            </div>
            <div className='home-center-activity-item'>
              <div className='home-center-activity-item-user'>
                <div className='activity-item-avatar'>
                  <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1517865922/celp/1517951_10202453119865002_502589953_o_qngm10.jpg' />
                </div>
                <div>
                  <a href='https://celp.herokuapp.com/#/user/night'><h2>night</h2></a>
                  <p>Added 1 photo</p>
                </div>
              </div>
              <div className='activity-item-biz'>
                <a href='https://celp.herokuapp.com/#/biz/42/'><h2>Shasha Café</h2></a>
                <div className='activity-one-photo-container'>
                  <div>
                    <img src='http://res.cloudinary.com/ddwejrtgh/image/upload/v1518152938/celp/IMG_6995_xbjibc.jpg'/>
                  </div>
                  <div className='tooltip'>
                    <i className="far fa-thumbs-up"></i>Like
                    <div className='tooltiptext'>under construction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HomeCenterActivities;
