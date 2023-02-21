Rails.application.routes.draw do
  get 'session/index'
  get 'session/current_user'
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }
  # get '/users/current_user', to: 'users#current_user'

  resources :session, only: [:index, :current_user]

  resources :photos, only: [:create]
  namespace :api do
    namespace :v1 do
      get 'destinations/index'
      post 'destination/create'
      get '/destination/:id', to: 'destinations#show'
      # delete '/destroy/:id', to: 'destinations#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'

end
