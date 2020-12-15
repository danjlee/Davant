json.extract! restaurant, :id, :name, :address, :location, :phone_number, :cuisine, 
    :menu, :hours, :dress_code, :exec_chef, :description, :reviews


if current_user
    json.favorited !!restaurant.favorites.find_by(user_id: current_user.id)
end