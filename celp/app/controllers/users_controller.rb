class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sessionp[:session_token] = @user.session_token
      redirect_to root
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
