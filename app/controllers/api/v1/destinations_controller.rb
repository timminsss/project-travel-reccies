class Api::V1::DestinationsController < ApplicationController
  before_action :set_destination, only: %i[show destroy]

  def index
    @destinations = Destination.all.order(name: :asc)
    render json: @destinations
  end

  def user_index
    @user_destinations = Destination.where(user_id: current_user)
    render json: @user_destinations
  end

  def create
    @destination = Destination.create!(destination_params)
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
