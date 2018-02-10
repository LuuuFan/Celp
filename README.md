# Celp

[Celp Live](https://celp.herokuapp.com/#/)

![](https://res.cloudinary.com/ddwejrtgh/image/upload/v1518214037/celp/Screenshot_from_2018-02-09_14-05-46_z1yw1m.png)


# Technology

Celp is a single-page web application that use React and Redux for the frontend and Ruby on Rails and Postgresql for the backend. GoogleMap API and Cloudinary Widget are used for mapping business and photo uploading.

# Features
## Homepage 
Homepage shows the sample business in San Francisco and location navigation. Also search bar on the top allows user to search for business by location. 
![](http://res.cloudinary.com/ddwejrtgh/image/upload/v1518214712/celp/Screenshot_from_2018-02-09_14-18-12_yknmtz.png)

## User Login/Signup
Using BCrypt encryption on the backend to provide security for user account. 
![](http://res.cloudinary.com/ddwejrtgh/image/upload/v1518214973/celp/Screenshot_from_2018-02-09_14-22-23_dygthy.png)

## Search
By clicking category on the navigation bar or searching, user can see all the related business. Business have been pointed out in map. User can also select business tag to get the similar business results.
![](http://res.cloudinary.com/ddwejrtgh/image/upload/v1518215120/celp/Screenshot_from_2018-02-09_14-25-02_u5l3uv.png)

## Business View
User can check the detail of the business, such as reviews, photos. Also user can leave a review, update exsiting review, delete review or add photo, remove photo for this businnes and add the business to bookmark. 
![](http://res.cloudinary.com/ddwejrtgh/image/upload/v1518215492/celp/Screenshot_from_2018-02-09_14-31-10_ybw7yx.png)

## User Profile
User can also check self profile or other Celper's profile, page listed the total number of reviews, photos and bookmarks. Also shows the recent activities for the user. Celp will add more feature on user.
![](http://res.cloudinary.com/ddwejrtgh/image/upload/v1518215858/celp/Screenshot_from_2018-02-09_14-37-21_o9rikx.png)

# Select Code Snippets

## Realtime update rate when write a review

```js
//write_review.jsx
class WriteReview extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleInput = this.handleInput.bind(this);
  }
  
    mouseOver(rate){
    const background = document.getElementById('write-review-rating-background');
    const position = 48 * rate - 24;
    background.style.backgroundPosition = `0 -${position}px`;
    this.setState({rate: rate});
  }
```

## Business rating and opening status on model
* Need to adjust later to fix timezone issue on heroku
```ruby
class Biz < ApplicationRecord
  def biz_rate
    (self.reviews.average(:rate).to_f * 2).round(0) / 2.to_f
  end
  
  def is_open
    today_hour = self.hours.where(day: DateTime.now.cwday).pluck(:start, :end)[0]
    if today_hour.nil?
      false
    else
      start = today_hour[0].slice(0, 2) + ":" + today_hour[0].slice(2,3)
      over = today_hour[1].slice(0, 2) + ":" + today_hour[1].slice(2,3)
      if DateTime.now > Time.parse(start) && DateTime.now < Time.parse(over)
        true
      else
        false
      end
    end
  end
end
```
# Future Development
* Homepage
  * Recent activity on homepage is hard coded now, will update to show the realtime data.
* User profile
  * Adding more user information - avatar, city, interests, ect.
  * Display user reviews, photos, bookmarks.
  * Option to add other Celp users as friends.
* Useful, Funny, Cool Reviews
  * Ability to rate other reviews
* Filter search result
  * User can filter the serach result base on price, open time
* Search base on map range
  * Allow user to drag map to do the re-search in the certain area.
  * Marker can guide user to the business show page
  * Update geocode request, save it to business database after get geocode from google, avoide Google geocode query alert
* Optimize CSS styling

