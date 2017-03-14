class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :author
      t.text :content
      t.date :published
      t.references :news, foreign_key: true

      t.timestamps
    end
  end
end
