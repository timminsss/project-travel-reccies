Rails.application.routes.draw do
  # get 'session/index'
  # get 'session/current_user'
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }
  # # # get '/users/current_user', to: 'users#current_user'
  # namespace :api do
  #   namespace :v1 do
  #     get 'destinations/index'
  #     # get 'destinations/my_destinations', to: 'desinations#user_index'
  #     # post 'destination/create'
  #     # get '/destination/:id', to: 'destinations#show'
  #     # # delete '/destroy/:id', to: 'destinations#destroy'
  #   end

  resources :session, only: [:index, :current_user]
  resources :photos, only: [:create]

  # end
  # root 'home#index'
  # get '/*path' => 'home#index'





  # devise_for :users
  namespace :api do
    namespace :v1 do
      get 'destinations/index'
      get 'destinations/my_destinations', to: 'destinations#user_index'
      post 'destination/create'
      get '/destination/:id', to: 'destinations#show'
      # delete '/destroy/:id', to: 'destinations#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'

end
