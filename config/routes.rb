Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'posts#index'
  resources :posts, only: [:index, :new, :create]
  get 'posts/cancel' => 'posts#cancel'
  get 'posts/select' => 'posts#select'
  get 'posts/unselect' => 'posts#unselect'
  get 'hoge/index' => 'hoge#index'
end
