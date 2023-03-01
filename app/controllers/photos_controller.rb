class PhotosController < ApplicationController
  def create
    result = Cloudinary::Uploader.upload(params[:image_url])
    photo = Photo.new(image_url: result['url'])
    photo.user = current_user
    puts photo
    if photo.save
      render json: photo
    else
      render json: photo.errors
    end
 end
end
