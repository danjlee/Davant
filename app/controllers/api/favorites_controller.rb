class Api::FavoritesController < ApplicationController
    def create
        @favorite = Favorite.new
        @favorite.user_id = current_user.id 
        @favorite.rest_id = params[:id]

        if @favorite.save
            @restaurant = @favorite.restaurant
            render "/api/restaurants/show"
        else
            render json: @favorite.errors.full_messages, status: 401
        end
    end

    def index   
        @user = User.find(current_user.id)

        if @user
            @favorites = @user.favorites
        else
            render json: ["User not found"], status: 404
        end
    end

    def show
        @favorite = Favorite.find(params[:id])
    end

    def destroy
        @favorite = Favorite.find_by(user_id: current_user.id, rest_id: params[:id])

        if @favorite
            @restaurant = @favorite.restaurant

            @favorite.destroy
            render "/api/restaurants/show"
        else
            render json: ["Favorite doesn't exist"], status: 404
        end

    end
end