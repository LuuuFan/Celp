import React from 'react';
import BizShowImgItem from './biz_show_img_item';

class BizShowImg extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  mouseOver(){
    // const img = document.getElementById("biz-show-img-2");
    // // debugger
    // img.classList.remove(".biz-show-img-zoom");
  }

  render(){
    const {imgs, biz, currentUser} = this.props;
    return (
      <div className='biz-show-right-bottom'>
        <div className='biz-show-img'>
          { imgs.length > 0 ? (
            <div>
              { imgs.map((img, idx) => {
                  if (idx <= 2) {
                    return (
                      <div key={idx} className='thumb' id={`biz-show-img-${idx}`}>
                        {img ? <BizShowImgItem img={img}  biz={biz} currentUser={currentUser}/> : ""}
                      </div>
                    );
                  }
                }
              )}
            </div>
          ) : (
            <div className='biz-show-no-img'>
              <img src='https://res.cloudinary.com/ddwejrtgh/image/upload/v1517535496/celp/city_line_nypobt.png' />
              <a href={`/#/biz/${biz.id}/addphoto`}><div><i className="fas fa-camera"></i>Add Photo</div></a>
            </div>
          )}
        </div>
        { imgs.length > 0 ? (
          <div className='biz-show-more-img'>
            <i className="far fa-images"></i><a href={`/#/biz/${biz.id}/photos`}>See all {biz.img_ids.length}</a>
          </div>) : "" }
      </div>
    );
  }
}

export default BizShowImg;
