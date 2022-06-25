Rails.application.routes.draw do
  root to: 'posts#index'
  resources :posts, only: [:index, :new, :create]
  get 'posts/cancel' => 'posts#cancel'
  get 'posts/select' => 'posts#select'
  get 'posts/unselect' => 'posts#unselect'
  get 'hoge/index' => 'hoge#index'
    devise_for :users
end
