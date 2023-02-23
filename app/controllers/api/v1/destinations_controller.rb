class Api::V1::DestinationsController < ApplicationController
  before_action :set_destination, only: %i[show destroy]
  # skip_before_action :authenticate_user!, only: [:index]

  def index
    @destinations = Destination.all.order(name: :asc)
    render json: @destinations
  end

  # to be done
  def user_index
    @user_destinations = Destination.where(user_id: current_user)
    render json: @user_destinations
  end

  def create
    @destination = Destination.new(destination_params)
    @destination.user = current_user
    if @destination
      render json: @destination
    else
      render json: @destination.errors
    end
  end

  def show
    render json: @destination
  end

  # def destroy
  #   @destination&.destroy
  #   render json: { message: 'Destination deleted!' }
  # end

  private

  def destination_params
    params.permit(:name, :city, :country, :image_url)
  end

  def set_destination
    @destination = Destination.find(params[:id])
  end
end
