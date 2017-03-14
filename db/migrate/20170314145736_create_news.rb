class CreateNews < ActiveRecord::Migration[5.0]
  def change
    create_table :news do |t|
      t.string :title
      t.text :subtitle
      t.text :body
      t.date :published
      t.boolean :active
      t.string :author

      t.timestamps
    end
  end
end
