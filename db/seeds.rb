# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all

User.create!({
    fname: 'Guest',
    lname: 'Davant',
    email: 'guest@davant.com',
    password: 'guestlogin',
    location: 'New York'
})

Restaurant.create!({
    name: 'Appleseed',
    address: '123 johnny street',
    location: 'New York',
    phone_number: '201-000-0000',
    cuisine: 'Italian',
    menu: 'www.google.com',
    hours: 'Lunch Dinner',
    dress_code: 'Casual',
    exec_chef: 'Jen Doe',
    description: 'best place'
})