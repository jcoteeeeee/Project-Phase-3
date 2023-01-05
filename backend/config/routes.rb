Rails.application.routes.draw do
  get 'appointments', to: 'appointments#index'
  get 'appointments/:id', to: 'appointments#show'
  post 'appointments', to: 'appointments#create'

  get 'artists', to: 'artists#index'
  get 'artists/:id', to: 'artists#show'
  post 'artists', to: 'artists#create'

  get 'clients', to: 'clients#index'
  get 'clients/:id', to: 'clients#show'
  post 'clients', to: 'clients#create'

  get 'tattoos', to: 'tattoos#index'
  get 'tattoos/:id', to: 'tattoos#show'
  post 'tattoos', to: 'tattoos#create'
  
end
