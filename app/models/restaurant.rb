# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  location     :string           not null
#  phone_number :string           not null
#  cuisine      :string           not null
#  menu         :string           not null
#  hours        :string           not null
#  dress_code   :string           not null
#  exec_chef    :string           not null
#  description  :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Restaurant < ApplicationRecord
    has_many :reservations,
    foreign_key: :rest_id,
    class_name: :Reservation 

    has_many :reviews,
    through: :reservations,
    class_name: :review

    has_many :favorites,
    foreign_key: :rest_id,
    class_name: :Favorite

    CUISINES = [
        "Korean", 
        "Chinese", 
        "Japanese", 
        "French", 
        "Italian", 
        "Greek", 
        "Mexican", 
        "Thai", 
        "Turkish"
    ]

    def self.find_restaurant(keyword)
        Restaurant.where("lower(name) like ?", "%#{keyword.downcase}%")
            .or(Restaurant.where("lower(location) like ?", "%#{keyword.downcase}%"))
                .or(Restaurant.where("lower(cuisine) like ?", "%#{keyword.downcase}%"))
    end
end
