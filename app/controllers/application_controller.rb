class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  # def current_user
  #   @current_user ||= User.find_by(id: session[:user_id])
  # end


  # before_action :configure_permitted_parameters, if: :devise_controller?

  # protected

  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
  # end
end
