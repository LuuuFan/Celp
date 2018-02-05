import React from 'react';

class BizShowBookmark extends React.Component {

  handleClick(action){
    if (action == 'unmark') {
      this.props.deleteBookmark(this.props.match.params.bizId)
    } else {
      this.props.createBookmark(this.props.match.params.bizId)
    }
  }


  render(){
    const {marked} = this.props;
    if (marked === undefined) {
      return (<div></div>);
    } else if (marked) {
      return (
        <li onClick={()=>this.handleClick('unmark')} className='biz-show-bookmark-marked'>
          <p className='inner'><i className="fas fa-bookmark"></i>Bookmarked</p>
        </li>)
    } else {
      return (
        <li onClick={()=>this.handleClick('mark')}>
          <i className="fas fa-bookmark"></i>Bookmark
        </li>
      );
    }
  }
}

export default BizShowBookmark;
