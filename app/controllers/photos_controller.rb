class PhotosController < ApplicationController
  def create
    result = Cloudinary::Uploader.upload(params[:image])
    photo = Photo.create(user_id: current_user.id, image: result['url'])
    if photo.save
      render json: photo
    else
      render json: photo.errors
    end
 end
end
