class Api::RestaurantsController < ApplicationController
    def index 

        if params[:keyword]
            @restaurants = Restaurant.find_restaurant(params[:keyword])

            unless @restaurants
                render json: ["Sorry, we couldn't find any results for \"#{params[:keyword]}\""]
            end
            
            render "api/restaurants/index"
        else
            @restaurants = Restaurant.all

            render "api/restaurants/index"
        end

    end

    def show
        @restaurant = Restaurant.find(params[:id])

        render "api/restaurants/show"
    end

    # def search
    #     if params[:keyword]
    #         @restaurants = Restaurant.find_restaurant(params[:keyword])
    #         render "api/restaurants/index"
    #     else
    #         render json: ["No results found"]
    #     end
    # end
end