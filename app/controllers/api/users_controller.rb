class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      session[:session_token] = @user.session_token
      render "api/users/session"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:id])
    if @user
      render :show
    else
      render json: ['no such user']
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if params[:user][:phone_number]
      @user.phone_number = params[:user][:phone_number]
      if @user.save
        render "api/users/session"
      else
        render json: @user.errors.full_messages, status: 422
      end
    elsif params[:user][:password]
      if @user.is_password?(params[:user][:password])
        @user.password=(params[:user][:newPassword])
        if @user.save
          render "api/users/session"
        else
          render json: @user.errors.full_messages, status: 422
        end
      else
        render json: ['The password you entered is incorrect.'], status: 401
      end
    else
      if @user.update(user_params)
        render "api/users/session"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :avatar_url,
      :phone_number,
      :first_name,
      :last_name,
      :headline,
      :love,
      :find_me_in,
      :multiple_email,
      :nickname,
      :newPassword
    )
  end
end
