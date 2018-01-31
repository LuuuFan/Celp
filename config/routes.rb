Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#index'
  namespace :api, default: {formmat: :json} do
    resources :users, only: [:create]
    resources :biz, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end
end
