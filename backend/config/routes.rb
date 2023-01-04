Rails.application.routes.draw do
  get 'appointments/:id', to: 'appointments#index'
end
