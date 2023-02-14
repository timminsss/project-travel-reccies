Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      get 'destinations/index'
      # post 'destinations/create'
      # get '/show/:id', to: 'destinations#show'
      # delete '/destroy/:id', to: 'destinations#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'
end
