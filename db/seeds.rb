# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(username: 'demo_users', password: 'password', email:'demo@gmail.com')
User.create(username: 'luufan', password:'shasha', email:'luuufan@gmail.com')
User.create(username: 'shasha', password: 'shasha', email:'shasha@gmail.com')
User.create(username: 'night', password: 'night123', email:'night@gmail.com')
