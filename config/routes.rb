Rails.application.routes.draw do

  # get 'users/index'
  #
  # get 'users/new'
  #
  # get 'users/show'


  root to: "puzzles#levels"
  # root to: "puzzles#index"
  get   'login'   => 'sessions#new'
  post  'login'   => 'sessions#create'
  get 'logout'  => 'sessions#destroy'

  resources :users, :puzzles

    post "/puzzles/:id" => "puzzles#win"
    get "/puzzles/levels" => "puzzles#levels"

    # get "/posts" => "posts#index"
    # get "/posts/:id" => "posts#show"
    # get "/posts/new" => "posts#new"
    # post "/posts" => "posts#create"  # usually a submitted form
    # get "/posts/:id/edit" => "posts#edit"
    # put "/posts/:id" => "posts#update" # usually a submitted form
    # delete "/posts/:id" => "posts#destroy"


  # get 'comment/create'
  #
  # get 'puzzle/index'
  #
  # get 'puzzle/show'
  #
  # get 'puzzle/edit'
  #
  # get 'puzzle/new'



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
