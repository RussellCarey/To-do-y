class DropTodosTable < ActiveRecord::Migration[7.0]
  def change
    def up
    drop_table :todos
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
  end
end
