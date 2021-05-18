Rails.application.routes.draw do
  root to: 'subjects#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :subjects do 
    resources :sources, only: [:create, :show]
  end

  resources :sources, only: [ :destroy ]


end
