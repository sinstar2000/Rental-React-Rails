Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    get 'search/locations', to: 'spots#search'
    resource :session, only: [:create, :destroy, :show]
    resource :user, only: [:create]
    resources :spots, only: [:create, :destroy, :show, :index]
    get 'bookings/curr_booking', to: 'bookings#curr_booking';
    resources :bookings, only: [:create, :destroy, :update, :index]
  end

  root "static_pages#root"
end
