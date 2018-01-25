class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    return nil if session[:session_token].nil?
    current_user = User.find_by(session_token: sessionp[:session_token])
  end

  def require_current_user
    if current_user.nil?
      redirect_to new_session_url
    end
  end
end
