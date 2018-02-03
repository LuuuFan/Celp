class Api::ReviewsController < ApplicationController
  def index
    if params[:biz_id]
      @reviews = Review.where(biz_id: params[:biz_id]).includes(:biz, :user)
    elsif params[:user_id]
      @reviews = Review.where(user_id: params[:user_id]).includes(:biz, :user)
    end
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.biz_id = params[:biz_id]
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
    render :show
  end

  private
  def review_params
    params.require(:review).permit(:body)
  end
end
