# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
#
# User.destroy_all
# User.create(username: 'demo_user', password: 'password', email:'demo@gmail.com')
# User.create(username: 'luufan', password:'shasha', email:'luuufan@gmail.com')
# User.create(username: 'shasha', password: 'shasha', email:'shasha@gmail.com')
# User.create(username: 'night', password: 'night123', email:'night@gmail.com')
# #
# Biz.destroy_all
# Hour.destroy_all
# Biz.create(
#   name: 'Sungrass Bakery',
#   address1: "1730 O'farrell St",
#   city:'San Francisco',
#   zip_code:'94115',
#   state:'CA',
#   phone:'(415) 000-0000'
# )
# Biz.create(
#   name: 'Shasha Café',
#   address1: "1750 O'farrell St",
#   address2: "#888",
#   city:'San Francisco',
#   zip_code:'94115',
#   state:'CA',
#   phone:'(415) 000-0000'
# )
# Biz.create(
#   name: 'Fat Angel',
#   address1: "1740 O'farrell St",
#   address2: "",
#   city:'San Francisco',
#   zip_code:'94115',
#   state:'CA',
#   phone:'(415) 525-3013'
# )
#
# Biz.create(
#   name: 'Fog Harbor Fish House',
#   address1: "Pier 39",
#   address2: "Ste A-202",
#   city:'San Francisco',
#   zip_code:'94133',
#   state:'CA',
#   phone:'(415) 421-2442',
#   website: 'fogharbor.com'
# )
#
# Biz.create(
#   name: 'The House ',
#   address1: "1230 Grant Ave",
#   address2: "",
#   city:'San Francisco',
#   zip_code:'94133',
#   state:'CA',
#   phone:'(415) 986-8612',
#   website: 'thehse.com'
# )
#
# Biz.create(
#   name: 'Hog Island Oyster Co',
#   address1: "1 Ferry Bldg",
#   address2: "Shop 11",
#   city:'San Francisco',
#   zip_code:'94111',
#   state:'CA',
#   phone:'(415) 391-7117',
#   website: 'hogislandoysters.com'
# )
#
#
# Biz.create(
#   name: 'Marlowe',
#   address1: "500 Brannan St",
#   city:'San Francisco',
#   zip_code:'94107',
#   state:'CA',
#   phone:'(415) 777-1413',
#   website: 'websitemarlowesf.com'
# )
#
# Img.destroy_all
#
# Review.destroy_all
#
# Tag.destroy_all
#
# Biz.create(
#   name: 'App Academy',
#   address1: '160 Spear St',
#   city:'San Francisco',
#   zip_code:'94111',
#   state:'CA',
#   phone:'',
#   website: 'appacademy.io'
# )
#
# Biz.all.pluck(:id).each do |biz_id|
#   (0..6).each do |day|
#     if day != 6
#       Hour.create(biz_id: biz_id, day: day, start:'1100', end: '2200' )
#     end
#   end
# end
#
#
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
    user = User.find_by(username: review['user']['name'].split(' ').join('_'))
    if !user
      User.create(
        username: review['user']['name'].split(' ').join('_'),
        password: 'password',
        avatar_url: review['user']['image_url'],
        email: "#{review['user']['name'].split(' ').join('_')}@celp.com"
      )
      user = User.find_by(username: review['user']['name'].split(' ').join('_'))
    end
    if user
      Review.create(
        user_id: user.id,
        biz_id: my_biz_id,
        body: review['text'],
        rate: review['rating']
      )
    else
      random_user_id = User.all.sample.id
      Review.create(
        user_id: random_user_id,
        biz_id: my_biz_id,
        body: review['text'],
        rate: review['rating']
      )
    end
  end
end

location_file = [
  # 'belmont.json',
  'burlingame.json',
  'daly_city.json',
  'forster_city.json',
  'millbrae.json',
  'redwood_city.json',
  'san_bruno.json',
  'san_francisco.json',
  'san_mateo.json',
  'south_san_francisco.json',
]

def seed(filenames, cat="")
  filenames.each do |filename|
    file = File.read(File.join(Rails.root, 'db', filename))
    data_hash = JSON.parse(file)
    data_hash['businesses'].each do |biz|
      biz_already_there = Biz.find_by(name: biz['name'], address1: biz['location']['address1'])
      if !biz_already_there
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
        if my_biz
          if cat.length > 0
            my_biz.category(cat)
          end

          if !biz['categories'].empty?
            biz['categories'].each do |category|
              my_biz.assign(category['alias'])
            end
          end
            (0..6).each do |day|
              if day != 6
                Hour.create(biz_id: my_biz.id, day: day, start:'1100', end: '2200' )
              end
            end
            fetch_review(biz['id'], my_biz.id)
            fetch_photo(biz['id'], my_biz.id)
          end
      end
    end
  end
end

seed(location_file)

# category_file = [
#   'san_francisco_homeservices.json',
#   'san_francisco_nightlife.json',
#   'san_francisco_restaurants.json'
# ]
#
# seed('san_francisco_homeservices.json', 'homeservices')
# seed('san_francisco_nightlife.json', 'nightlife')
# seed('san_francisco_restaurants.json', 'restaurants')

# category = ['homeservices', 'nightlife', 'restaurants']
# category.each do |cat, cat_idx|
#   category_file.each do |file, file_idx|
#     if cat_idx = file_idx
#       seed(file, cat)
#     end
#   end
# end
