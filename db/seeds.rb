# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Restaurant.destroy_all
Reservation.destroy_all
Review.destroy_all
Favorite.destroy_all

user1 = User.create!(
    fname: 'Guest',
    lname: 'Davant',
    email: 'guest@davant.com',
    password: 'guestlogin',
    location: 'New York'
)

user2 = User.create!(
    fname: 'Dan',
    lname: 'Lee',
    email: 'danlee@davant.com',
    password: 'davant',
    location: 'New York'
)

user3 = User.create!(
    fname: 'Emily',
    lname: 'Blunt',
    email: 'eblunt@davant.com',
    password: 'davant',
    location: 'New York'
)

user4 = User.create!(
    fname: 'John',
    lname: 'Doe',
    email: 'jdoe@davant.com',
    password: 'davant',
    location: 'New York'
)

user5 = User.create!(
    fname: 'Ryan',
    lname: 'Reynolds',
    email: 'reynolds@davant.com',
    password: 'davant',
    location: 'New York'
)

user6 = User.create!(
    fname: 'Dave',
    lname: 'Chappelle',
    email: 'dc@davant.com',
    password: 'davant',
    location: 'New York'
)

# 30.times do 
#     User.create(
#         fname: Faker::Name.first_name,
#         lname: Faker::Name.last_name,
#         email: Faker::Internet.unique.email,
#         password: 'davant',
#         location: ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Miami', 'Las Vegas', 'London', 'Tokyo', 'Sydney', 'Berlin', 'Mexico City', 'Dublin'].sample
        
#     )
# end

# restaurants

min = Time.now - 3.years
max = Time.now

rest1 = Restaurant.create!(
    name: 'Sfoglia',
    address: '135 E. 92nd Street New York, NY 10028',
    location: 'New York',
    phone_number: '(212) 831-1402',
    cuisine: 'Italian',
    menu: 'htttp://www.sfogliarestaurant.com/',
    hours: 'Dinner: Sunday - Monday: 5:30pm - 10:00pm, Tuesday - Saturaday: 5:30pm - 10:30pm',
    dress_code: 'Smart Casual',
    exec_chef: 'N/A',
    description: 'N/A'
)

res = Reservation.create!(
    user_id: user2.id,
    rest_id: rest1.id,
    time: "#{("1".."12").to_a.sample}:00 PM",
    date: rand(min..max).to_s[0..9],
    party_size: (1..12).to_a.sample,
    occasion: ['none', 'birthday', 'anniversary', 'holiday'].sample
)

Review.create!(
    res_id: res.id,
    author_id: res.user_id,
    comment: "Hello",
    overall: 1,
    food: 1,
    service: 1,
    ambience: 1
)

rest2 = Restaurant.create!(
    name: 'Bar Boulud',
    address: '1900 Broadway New York, NY 10023',
    location: 'New York',
    phone_number: '(212) 595-0303',
    cuisine: 'French',
    menu: 'http://www.barboulud.com/nyc/',
    hours: 'Dinner: Tue-Sat 5:00 pm-9:00 pm',
    dress_code: 'Business Casual',
    exec_chef: 'N/A',
    description: 'N/A'
)

rest3 = Restaurant.create!(
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
)

