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

# restaurants

Restaurant.create!({
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
})

Restaurant.create!({
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