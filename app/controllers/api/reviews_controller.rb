class Api::ReviewsController < ApplicationController
  def index
    if params[:biz_id]
      @reviews = Review.where(biz_id: params[:biz_id]).order(id: :desc).includes(:user)
      render :index
    elsif params[:user_id]
      @reviews = Review.where(user_id: params[:user_id]).includes(:biz)
      render 'api/reviews/index_user'
    end
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
    # @review = Review.find_by(id: params[:review_id])
    @review = Review.where(biz_id: params[:biz_id], user_id: current_user.id)[0]
  end

  def update
    @review = Review.where(biz_id: params[:biz_id], user_id: params[:review][:user_id])[0]
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
    render :show
  end

  private
  def review_params
    params.require(:review).permit(:body, :rate)
  end
end
