class AddIsCompletedToTodos < ActiveRecord::Migration[7.0]
  def change
    add_column :todos, :is_completed, :boolean
  end
end
