class Api::V1::DestinationsController < ApplicationController
  before_action :set_destination, only: %i[show destroy]
  # skip_before_action :authenticate_user!, only: [:index]

  def index
    @destinations = Destination.all.order(name: :asc)
    @markers = @destinations.geocoded.map do |destination|
      {
        lat: destination.latitude,
        lng: destination.longitude
      }
    end
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
    unless @destination.image_url
      @destination.image_url = 'https://res.cloudinary.com/dvo81bzx4/image/upload/v1677645337/Reccie_jjubak.png'
    end
    if @destination.save
      render json: @destination, status: :created
    else
      render json: @destination.errors, status: :unprocessable_entity
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
    params.require(:destination).permit(:user, :name, :city, :country, :image_url)
  end

  def set_destination
    @destination = Destination.find(params[:id])
  end
end
