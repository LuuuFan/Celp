# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# User.create(username: 'demo_users', password: 'password', email:'demo@gmail.com')
# User.create(username: 'luufan', password:'shasha', email:'luuufan@gmail.com')
# User.create(username: 'shasha', password: 'shasha', email:'shasha@gmail.com')
# User.create(username: 'night', password: 'night123', email:'night@gmail.com')

# Biz.destroy_all
Biz.create(
  name: 'Sungrass Bakery',
  address1: "1730 O'farrell St",
  city:'San Francisco',
  zip_code:'94115',
  state:'CA',
  phone:'(415) 000-0000'
)
Biz.create(
  name: 'Shasha Café',
  address1: "1730 O'farrell St",
  address2: "#888",
  city:'San Francisco',
  zip_code:'94115',
  state:'CA',
  phone:'(415) 000-0000'
)
Biz.create(
  name: 'Fat Angel',
  address1: "1740 O'farrell St",
  address2: "",
  city:'San Francisco',
  zip_code:'94115',
  state:'CA',
  phone:'(415) 525-3013'
)
