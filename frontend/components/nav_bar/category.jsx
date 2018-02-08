import React from 'react';


class Category extends React.Component {

  handleClick(cat){
    this.props.requestCategory(cat)
      .then(this.props.history.push(`/search?cat=${cat}`));
  }


  render(){
    return(
      <div className='business'>
        <ul>
          <a onClick={()=>this.handleClick("restaurants")}>
            <li>
              <i className="fas fa-utensils"></i>
              <p>Restaurants</p>
            </li>
          </a>
          <a onClick={()=>this.handleClick("nightlife")}>
            <li>
              <i className="fas fa-glass-martini"></i>
              <p>Nightlife</p>
            </li>
          </a>
          <a onClick={()=>this.handleClick("homeservices")}>
            <li>
              <i className="fas fa-wrench"></i>
              <p>Home Services</p>
              <i className="fa fa-sort-desc" aria-hidden="true"></i>
            </li>
          </a>
          </ul>
      </div>
    );
  }
}

export default Category;
