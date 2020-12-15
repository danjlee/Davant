Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:index, :show]
    resources :reservations, only: [:index, :show, :create, :destroy]
    resources :reviews, only: [:create, :index, :show, :destroy, :update]
    resources :favorites, only: [:create, :index, :show, :destroy]
  end
  
end
