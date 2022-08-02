Rails.application.routes.draw do
  # devise_for is meant to play nicely with other routes methods. 
  # For example, by calling devise_for inside a namespace, it automatically nests your devise controllers.

  devise_for :users,
  # Added defaults to stop flash error
  defaults: { format: :json },
  # Usually point to devise controllers. Custom. You can remove _controller.
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/current-user', to: 'members#show'
  
end
