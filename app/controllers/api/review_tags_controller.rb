class Api::ReviewTagsController < ApplicationController

  def create
    @review_tag = ReviewTag.new(review_id: params[:review_id], tag:params[:tag])
    @review_tag.user_id = current_user.id
    @review = Review.find_by(id: params[:review_id])
    if @review_tag.save
      render :show
    else
      render json: @review_tag.errors.full_messages
    end
  end

  def destroy
    @review_tag = ReviewTag.where(review_id: params[:review_id], user_id: current_user.id, tag: params[:tag])[0]
    @review = Review.find_by(id: params[:review_id])
    if @review_tag
      @review_tag.destroy
      render :show
    else
      render json: ['cannot find review_tag'], status: 422
    end
  end

end
