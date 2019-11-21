Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  
  get 'users/:user_id/likes/', to: 'users#index'
  get 'users/:favorite_id/favorites', to: 'users#index'
  get 'users/', to: 'users#index'
  post 'users/', to: 'users#create'
  patch 'users/:id', to: 'users#update', as: 'user'
  get 'users/:id', to: 'users#show'
  put 'users/:id', to: 'users#update'
  delete 'users/:id', to: 'users#destroy'
  
  
  # get 'artworks/', to: 'artworks#index'
  get 'artworks/:artwork_id/likes/', to: 'artworks#index'
  get 'artworks/:favorite_id/favorites', to: 'artworks#index'
  get 'users/:user_id/artworks/', to: 'artworks#index'
  post 'artworks/', to: 'artworks#create'
  patch 'artworks/:id', to: 'artworks#update', as: 'artwork'
  get 'artworks/:id', to: 'artworks#show'
  put 'artworks/:id', to: 'artworks#update'
  delete 'artworks/:id', to: 'artworks#destroy'
  
  
  get 'artwork_shares/', to: 'artwork_shares#index'
  post 'artwork_shares/', to: 'artwork_shares#create'
  patch 'artwork_shares/:id', to: 'artwork_shares#update', as: 'artwork_share'
  get 'artwork_shares/:id', to: 'artwork_shares#show'
  put 'artwork_shares/:id', to: 'artwork_shares#update'
  delete 'artwork_shares/:id', to: 'artwork_shares#destroy'
  
  get 'comments/:comment_id/likes/', to: 'comments#index'
  get 'comments/', to: 'comments#index'
  post 'comments/', to: 'comments#create'
  delete 'comments/:id', to: 'comments#destroy'

  get 'likes/', to: 'likes#index'
  post 'likes/', to: 'likes#create'
  delete 'likes/:id', to: 'likes#destroy'

  get 'favorites/', to: 'favorites#index'
  delete 'favorites/:id', to: 'favorites#destroy'
end
