import React from 'react';
import {getGif} from '../../util/not_found_util';
import NavBarContainer from '../nav_bar/nav_bar_container';

class NotFound extends React.Component {



  render(){
    const imgArr = $.parseJSON(getGif().responseText);
    const imgUrl = imgArr.data[Math.floor(Math.random()*25)].images.original.webp;
    return (
      <div>
        <NavBarContainer />
        <div className='notfound'>
          <h1>Oops! Page Not Found</h1>
          <div className='notfound-img'>
            <img src={imgUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
