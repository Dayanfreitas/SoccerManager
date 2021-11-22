Rails.application.routes.draw do
  devise_for :users, path: 'auth',
              defaults: { format: :json },
              path_names: {
              },
              controllers: {
                sessions: 'sessions',
              }

  namespace :api do
    namespace :v1 do           
      resources :access_types
      resources :contacts
      resources :enterprises
      resources :games
      resources :players
      resources :players_games
      resources :positions
      resources :user
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


