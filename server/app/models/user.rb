#Notes : https://egghead.io/lessons/ruby-on-rails-add-custom-fields-to-a-devise-user-model-with-a-ruby-on-rails-migration
# https://btihen.me/post_ruby_rails/rails_devise_users_namespaced/
class User < ApplicationRecord
  validates :email, presence: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
  :jwt_authenticatable,
  jwt_revocation_strategy: JwtDenylist
        #  :recoverable, :rememberable, :validatable
    
end