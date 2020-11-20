class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)

        if @review.save
            @review
            render "api/reviews/show"
        else
            render json: @review.errors.full_message, status: 422
    end

    def update
        @review = Review.find(params[:id])

        if @review.update_attributes(review_params)
            render "api/reviews/show"
        else
            render json: @review.errors.full_message, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review.destroy
            render "api/reviews/show"
        else
            render json: ["Review does not exist."]
        end

    end

    private
    def review_params
        params.require(:review).permit(:author_id, :rest_id, :overall, :food, :service, :ambience, :comment)
    end
end