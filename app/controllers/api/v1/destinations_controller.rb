class Api::V1::DestinationsController < ApplicationController
  # before_action :set_destination, only: %i[show destroy]

  def index
    @destinations = Destination.all.order(created_at: :desc)
    render json: @destinations
    # @destinations = Destination.all
  end

  # def create
  #   @destination = Destination.create!(destination_params)
  #   if @destination
  #     render json: @destination
  #   else
  #     render json: @destination.errors
  #   end
  # end

  # def show
  #   render json: @destination
  # end

  # def destroy
  #   @destination&.destroy
  #   render json: { message: 'Destination deleted!' }
  # end

  # private

  # def destination_params
  #   params.permit(:name, :city, :country, :image_url)
  # end

  # def set_destination
  #   @destination = Destination.find(params[:id])
  # end
end
