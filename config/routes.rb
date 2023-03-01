Rails.application.routes.draw do
  # get 'session/index'
  # get 'session/current_user'
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }

  resources :session, only: [:index, :current_user]
  # resources :photos, only: [:create]
  resources :photos

  namespace :api do
    namespace :v1 do
      get 'destinations/index'
      get 'destinations/my_destinations', to: 'destinations#user_index'
      post 'destinations/create', to: 'destinations#create'
      get '/destination/:id', to: 'destinations#show'
      # delete '/destroy/:id', to: 'destinations#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'

end
