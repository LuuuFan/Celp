import React from 'react';
import BizMoreInfoHours from './biz_more_info_hours';

const BizShowMoreInfo = ({biz}) => (
  <div className='biz-show-more-info'>
    <div className='today-open-info'>
      <i className="far fa-clock"></i><p>Today 11:00 am - 10:00 pm</p>
    </div>
    <h1>Hours</h1>
    { biz.hours ? <BizMoreInfoHours hours={biz.hours}/> : ''}
    <h1>More business info</h1>
    <div className='more-biz-info'>
      <dl><dt>Takes Reservations</dt><dd>{biz.takes_reservations ? "Yes" : "No"}</dd></dl>
      <dl><dt>Delivery</dt><dd>{biz.delivery ? "Yes" : "No"}</dd></dl>
      <dl><dt>Take-out</dt><dd>{biz.take_out ? "Yes" : "No"}</dd></dl>
      <dl><dt>Accepts Credit Cards</dt><dd>{biz.credit_cards ? "Yes" : "No"}</dd></dl>
      <dl><dt>Accepts Apple Pay</dt><dd>{biz.apple_pay ? "Yes" : "No"}</dd></dl>
      <dl><dt>Accepts Android Pay</dt><dd>{biz.android_pay ? "Yes" : "No"}</dd></dl>
      <dl><dt>Accepts Bitcoin</dt><dd>{biz.bitcoin ? "Yes" : "No"}</dd></dl>
      <dl><dt>Parking</dt><dd>{biz.parking}</dd></dl>
      <dl><dt>Bike Parking</dt><dd>{biz.bike_parking ? "Yes" : "No"}</dd></dl>
      <dl><dt>Wheelchair Accessible</dt><dd>{biz.wheelchair ? "Yes" : "No"}</dd></dl>
      <dl><dt>Noise Level</dt><dd>{biz.noise_level}</dd></dl>
      <dl><dt>Alcohol</dt><dd>{biz.alcohol}</dd></dl>
      <dl><dt>Outdoor Seating</dt><dd>{biz.outdoor_seating ? "Yes" : "No"}</dd></dl>
      <dl><dt>Wi-Fi</dt><dd>{biz.wifi ? "Yes" : "No"}</dd></dl>
      <dl><dt>Has TV</dt><dd>{biz.has_tv ? "Yes" : "No"}</dd></dl>
      <dl><dt>Dogs Allowed</dt><dd>{biz.dogs_allowed ? "Yes" : "No"}</dd></dl>
      <dl><dt>Cats Allowed</dt><dd>{biz.cats_allowed ? "Yes" : "No"}</dd></dl>
      <dl><dt>Waiter Service</dt><dd>{biz.waiter_service ? "Yes" : "No"}</dd></dl>
      <dl><dt>Caters</dt><dd>{biz.caters ? "Yes" : "No"}</dd></dl>
      <dl><dt>Gender Neutral Restrooms</dt><dd>{biz.gender_neutral_restrooms ? "Yes" : "No"}</dd></dl>
    </div>
    <h1>Other Restaurants Nearby</h1>
    <ul>
      <li>Find more Restaurants nearby</li>
    </ul>
    <h1>Browse nearby</h1>
    <ul>
      <li><i className="fas fa-utensils"></i><p>Restaurants</p></li>
      <li><i className="fas fa-glass-martini"></i><p>Nightlife</p></li>
      <li><i className="fas fa-shopping-bag"></i><p>Shopping</p></li>
      <li><i className="fas fa-ellipsis-h"></i><p>Show all</p></li>
    </ul>
    <h1>Dining in Yelp</h1>
    <ul>
      <li><i className="fas fa-search"></i><p>Search for reservations</p></li>
      <li><i className="fas fa-calendar-alt"></i><p>Book a Table in Yelp</p></li>
    </ul>
    <h1>Near Me</h1>
    <ul>
      <li>Restaurants Near Me</li>
    </ul>
  </div>
);

export default BizShowMoreInfo;