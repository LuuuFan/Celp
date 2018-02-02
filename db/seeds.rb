# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
#
# User.destroy_all
# User.create(username: 'demo_users', password: 'password', email:'demo@gmail.com')
# User.create(username: 'luufan', password:'shasha', email:'luuufan@gmail.com')
# User.create(username: 'shasha', password: 'shasha', email:'shasha@gmail.com')
# User.create(username: 'night', password: 'night123', email:'night@gmail.com')
#
# Biz.destroy_all
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
#   address1: "1730 O'farrell St",
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
# Img.destroy_all
# Img.create(
#   biz_id: 7,
#   user_id: 5,
#   url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/1911276_10202656012097181_1086564781_o.jpg?oh=b78d1e273835e7866c33dbfa6a67b14b&oe=5B250003'
# )
#
# Img.create(
#   biz_id: 7,
#   user_id: 5,
#   url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/1487994_10202453162466067_1183927869_o.jpg?oh=965e3bb005bd86a4858fe85048640aed&oe=5AEAEB97'
# )
#
# Img.create(
#   biz_id: 7,
#   user_id: 5,
#   url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/1501349_10202453168466217_804954821_o.jpg?oh=fcb423a163691b33856b052bb38dfe24&oe=5ADDCFDB'
# )
