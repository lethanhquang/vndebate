Rails.application.routes.draw do
  mount API::Base => '/api'

  devise_for :users

  root 'application#index'

  namespace :admin do
    root to: 'dashboard#index'

    resources :users
    resources :topics
    resources :posts
  end

end
