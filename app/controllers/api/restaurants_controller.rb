class Api::RestaurantsController < ApplicationController
    def index 
            @restaurants = Restaurant.all

            render "api/restaurants/index"

    end

    def show
        @restaurants.find(params[:id])

        render "api/restaurants/show"
    end

    def search
        if params[:keyword]
            @restaurants = Restaurant.find_restaurant(params[:keyword])
            render "api/restaurants/index"
        else
            render json: ["No results found"]
        end
    end
end