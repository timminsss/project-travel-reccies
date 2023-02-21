class SessionsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
  end

  def current_user
    render json: current_user.slice(:email)
  end

end
