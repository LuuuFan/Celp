class SessionsController < ApplicationController
  before_action :require_current_user, only: [:destroy]

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      session[:session_token] = @user.session_token
      redirect_to root
    else
      flash[:errors] = 'Wrong Credentials'
      render :new
    end
  end

  def destroy
    current_user.reset_session_token
    session[:session_token] = nil
    redirect_to root
  end
end
