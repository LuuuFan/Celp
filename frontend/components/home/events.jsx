import React from 'react';


class Events extends React.Component {

  render(){
    return(
      <div className='events'>
        <div className='events-header'>
          <div>
            <h1>Browse Events</h1>
            <p>This is a showcase page, everything links to real <a href='https://www.yelp.com/events'>Yelp</a>.</p>
          </div>
          <a href='https://www.yelp.com/events/create'>
            <button>Create an Event on Yelp</button>
          </a>
        </div>
        <div className='events-index group'>
          <div className='events-index-item'>
            <div className='events-index-item-img-container'>
              <a href='https://www.yelp.com/events/san-mateo-cat-and-kitten-adoption-fair-adoption-fair-this-sunday-3-11-at-pet-club-in-san-mateo-12-3-pm'>
                <img src='https://s3-media1.fl.yelpcdn.com/ephoto/D_ozNRnmHnNljkusMTfRBg/300s.jpg' />
              </a>
            </div>
            <div className='events-item-description'>
              <h3>
                <a href='https://www.yelp.com/events/san-mateo-cat-and-kitten-adoption-fair-adoption-fair-this-sunday-3-11-at-pet-club-in-san-mateo-12-3-pm'>Cat and Kitten Adoption Fair Adoption Fair</a>
              </h3>
              <table>
                <tbody>
                  <tr><td><i className="fas fa-calendar-alt"></i></td><td>Mar 11, 12:00pm</td></tr>
                  <tr><td><i className="fas fa-map-marker"></i></td><td>pet Club -- San Mateo</td></tr>
                </tbody>
              </table>
              <p>Want Kitties? Oh, ho, ho. Have we got kitties for you!  We have LOTS of kittens...</p>
              <div className='events-item-category'>
                <a href='https://www.yelp.com/events/sf/browse?c=9'>Charities</a>
              </div>
            </div>
          </div>
          <div className='events-index-item'>
            <div className='events-index-item-img-container'>
              <a href='https://www.yelp.com/events/san-francisco-san-francisco-decorator-showcase-2018'>
                <img src='https://s3-media3.fl.yelpcdn.com/ephoto/bsDcDN2tr45ohUsq0Mwzlg/300s.jpg' />
              </a>
            </div>
            <div className='events-item-description'>
              <h3>
                <a href='https://www.yelp.com/events/san-francisco-san-francisco-decorator-showcase-2018'>San Francisco Decorator Showcase 2018</a>
              </h3>
              <table>
                <tbody>
                  <tr><td><i className="fas fa-calendar-alt"></i></td><td>Apr 28, 10:00 am</td></tr>
                  <tr><td><i className="fas fa-map-marker"></i></td><td>465 Marina Blvd. San Francisco</td></tr>
                </tbody>
              </table>
              <p>The 41st San Francisco Decorator Showcase is delighted to announce the ...</p>
              <div className='events-item-category'>
                <a href='https://www.yelp.com/events/sf/browse?c=9'>Charities</a>
              </div>
            </div>
          </div>
          <div className='events-index-item'>
            <div className='events-index-item-img-container'>
              <a href='https://www.yelp.com/events/san-francisco-san-francisco-spca-150th-anniversary-celebration'>
                <img src='https://s3-media2.fl.yelpcdn.com/ephoto/tC_iZSQA8XsdW66gyuQpLQ/300s.jpg' />
              </a>
            </div>
            <div className='events-item-description'>
              <h3>
                <a href='https://www.yelp.com/events/san-francisco-san-francisco-spca-150th-anniversary-celebration'>San Francisco SPCA 150th Anniversary Celebration</a>
              </h3>
              <table>
                <tbody>
                  <tr><td><i className="fas fa-calendar-alt"></i></td><td>Apr 18, 6:30 pm</td></tr>
                  <tr><td><i className="fas fa-map-marker"></i></td><td>San Francisco City Hall</td></tr>
                </tbody>
              </table>
              <p>The San Francisco SPCA is celebrating 150 years of rescuing and caring for animals ...</p>
              <div className='events-item-category'>
                <a href='https://www.yelp.com/events/sf/browse?c=9'>Charities</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Events;
