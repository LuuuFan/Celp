Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#index'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :imgs, only: [:index]
      resources :reviews, only: [:index]
    end
    resources :biz, only: [:index, :show] do
      resources :imgs, only: [:index, :create]
      resources :reviews, only: [:index, :create]
      resource :review, only: [:show, :update,]
      resource :bookmark, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :imgs, only: [:show, :destroy] do
      resource :like, only: [:create, :destroy]
    end
    resources :reviews, only: [:show, :destroy] do
      resource :review_tags, only: [:create, :destroy]
    end
    resources :searches, only: [:index]
  end
  post '/api/biz/:id/sms', to: 'api/biz#sms', as: 'biz_sms'
end
