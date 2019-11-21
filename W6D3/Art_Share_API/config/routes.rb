Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users

  get 'users/', to: 'users#index'
  post 'users/', to: 'users#create'
  patch 'users/:id', to: 'users#update', as: 'user'
  get 'users/:id', to: 'users#show'
  put 'users/:id', to: 'users#update'
  delete 'users/:id', to: 'users#destroy'

  get 'artworks/', to: 'artworks#index'
  post 'artworks/', to: 'artworks#create'
  patch 'artworks/:id', to: 'artworks#update', as: 'artwork'
  get 'artworks/:id', to: 'artworks#show'
  put 'artworks/:id', to: 'artworks#update'
  delete 'artworks/:id', to: 'artworks#destroy'
end
