Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#index'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :imgs, only: [:index]
    end
    resources :biz, only: [:index, :show] do
      resources :imgs, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :imgs, only: [:show]
  end
end
