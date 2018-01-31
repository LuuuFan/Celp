class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      session[:session_token] = @user.session_token
      render "api/users/show", status: 200
    else
      render json: ['The username or password you entered is incorrect.'], status: 401
    end
  end

  def destroy
    if current_user
      @user = current_user
      current_user.reset_session_token
      session[:session_token] = nil
      @current_user = nil
      render "api/users/show", status: 200
    else
      render json: ['Nobody signed in'], status: 404
    end
  end
end
