class Api::LikesController < ApplicationController

  def create
    @like = Like.new(img_id: params[:img_id])
    @like.user_id = current_user.id
    if @like.save
      render json: 'success', status: 200
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = Like.where(img_id: params[:img_id], user_id: current_user.id)
    if @like
      @like.destroy
      render json: 'success', status: 200
    else
      render json: ['cannot find like'], status: 422
    end
  end
end
