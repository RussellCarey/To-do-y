class Category < ApplicationRecord
    belongs_to :user
    has_many :todos, dependent: :delete_all
end
