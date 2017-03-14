class AddIndexToNews < ActiveRecord::Migration[5.0]
  def change
    add_index :news, :created_at
  end
end
