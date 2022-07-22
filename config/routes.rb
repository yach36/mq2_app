Rails.application.routes.draw do
  get 'users/show'
  root to: 'posts#index'
  resources :posts, only: [:index, :new, :create]
  get 'posts/cancel' => 'posts#cancel'
  get 'posts/select' => 'posts#select'
  get 'posts/unselect' => 'posts#unselect'
  get 'hoge/index' => 'hoge#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :users, only: [:show]
end
