class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      render 'api/users/show'
    else
      render json: ['Wrong Credentials'], status: 401
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token
      session[:session_token] = nil
      render json: {message: 'Logout successful'}
    else
      render status: 404
    end
  end
end
