require 'json'
require 'rest-client'

def fetch_photo(biz_id, my_biz_id)
  response = RestClient::Request.execute(
    method: :get,
    url: "https://api.yelp.com/v3/businesses/#{biz_id}",
    headers: {Authorization: 'Bearer 7AzKetI9iUF-ZdqNIap3z9d4VfqUYmpneo5BlqrukldMYwGIIckvirm-jTcF59M2HMH7GnVcbB8e7e9om6-OuxN2ZrIgabRNjNng6viVPS14AAZPFV0M9B20pglqWnYx'}
  )

  photos=JSON.parse(response)['photos']

  photos.each do |photo|
    random_user_id = User.all.sample.id
    Img.create(
      biz_id: my_biz_id,
      user_id: random_user_id,
      url: photo)
  end
end

def fetch_review(biz_id, my_biz_id)
  response = RestClient::Request.execute(
    method: :get,
    url: "https://api.yelp.com/v3/businesses/#{biz_id}/reviews",
    headers: {Authorization: 'Bearer 7AzKetI9iUF-ZdqNIap3z9d4VfqUYmpneo5BlqrukldMYwGIIckvirm-jTcF59M2HMH7GnVcbB8e7e9om6-OuxN2ZrIgabRNjNng6viVPS14AAZPFV0M9B20pglqWnYx'}
  )

  review = JSON.parse(response)

  review['reviews'].each do |review|
    User.create(
      username: review['user']['name'].split(' ').join('_'),
      password: 'password',
      avatar_url: review['user']['image_url'],
      email: "#{review['user']['name'].split(' ').join('_')}@celp.com"
    )
    user = User.find_by(username: review['user']['name'].split(' ').join('_'))
    Review.create(
      user_id: user.id,
      biz_id: my_biz_id,
      body: review['text'],
      rate: review['rating']
    )
  end
end

filename = [
  'belmont.json',
  'burlingame.json',
  'daly_city.json',
  'forster_city.json',
  'millbrae.json',
  'redwood_city.json',
  'san_bruno.json',
  'san_francisco.json',
  'san_mateo.json',
  'south_san_francisco.json',
  'san_francisco_homeservices.json',
  'san_francisco_nightlife.json',
  'san_francisco_restaurants.json'
]

# filename.each do |filename|
  file = File.read('san_francisco_restaurants.json')
  data_hash = JSON.parse(file)
  data_hash['businesses'].each do |biz|
    Biz.create(
      name: biz['name'],
      address1: biz['location']['address1'],
      address2: biz['location']['address2'],
      address3: biz['location']['address3'],
      city: biz['location']['city'],
      zip_code: biz['location']['zip_code'],
      state: biz['location']['state'],
      lat: biz['coordinates']['latitude'],
      lng: biz['coordinates']['longitude'],
      price: biz['price'],
      phone: biz['display_phone'],
      img_url: biz['image_url'],
    )
    my_biz = Biz.find_by(name:biz['name'])
    biz.categories.each do |category|
      my_biz.assign(category['alias'])
    end
    fetch_review(biz.id, my_biz.id)
    fetch_photo(biz.id, my_biz.id)
  end
# end
