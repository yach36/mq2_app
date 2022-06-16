Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'top#index'
  resources :posts, only: [:index, :new, :create]
  get 'posts/cancel' => 'posts#cancel'
  get 'posts/track_select' => 'posts#track_select'
  get 'hoge/index' => 'hoge#index'
end
