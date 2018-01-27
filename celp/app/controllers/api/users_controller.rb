class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      session[:session_token] = @user.session_token
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
