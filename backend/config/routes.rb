Rails.application.routes.draw do
  get 'appointments', to: 'appointments#index'
  get 'appointments/:id', to: 'appointments#show'
  post 'appointments', to: 'appointments#create'
  patch 'appointments/:id', to: 'appointments#update'
  delete 'appointments/:id', to: "appointments#destroy"

  get 'artists', to: 'artists#index'
  get 'artists/:id', to: 'artists#show'
  post 'artists', to: 'artists#create'
  patch 'artists/:id', to: 'artists#update'
  delete 'artists/:id', to: 'artists#destroy'

  get 'clients', to: 'clients#index'
  get 'clients/:id', to: 'clients#show'
  post 'clients', to: 'clients#create'
  patch 'clients/:id', to: 'clients#update'
  delete 'clients/:id', to: 'clients#destroy'

  get 'tattoos', to: 'tattoos#index'
  get 'tattoos/:id', to: 'tattoos#show'
  post 'tattoos', to: 'tattoos#create'
  patch 'tattoos/:id', to: 'tattoos#update'
  delete 'tattoos/:id', to: 'tattoos#destroy'
  
end
