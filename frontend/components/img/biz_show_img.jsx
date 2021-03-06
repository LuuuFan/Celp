import React from 'react';
import BizShowImgItem from './biz_show_img_item';

class BizShowImg extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  mouseOver(e){
    if (e.currentTarget.id !== "biz-show-img-1") {
      const img = document.getElementById("biz-show-img-1");
      if (img) {
        img.classList.remove('biz-show-img-zoom');
      }
    }
  }

  mouseOut(){
    const img = document.getElementById("biz-show-img-1");
    if (img) {
      img.classList.add('biz-show-img-zoom');
    }
  }

  render(){
    const {imgs, biz, currentUser} = this.props;
    return (
      <div className='biz-show-right-bottom'>
        <div className='biz-show-img'>
          { imgs.length > 0 ? (
            <div onMouseOut={()=>this.mouseOut()}>
              { imgs.map((img, idx) => {
                  if (idx <= 2) {
                    return (
                      <div onMouseOver={(e)=>this.mouseOver(e)} key={idx} className={idx === 1 ? 'thumb biz-show-img-zoom' : 'thumb'} id={`biz-show-img-${idx}`}>
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
