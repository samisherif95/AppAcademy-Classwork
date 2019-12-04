Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only:[:new,:create]
  resources :subs do
    resources :posts ,only:[:create] do
      resources :comments, only:[:new]
    end
  end
  resource :session,only:[:new,:create,:destroy]
end
