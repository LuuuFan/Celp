class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :category, null: false
      t.timestamps
    end
    add_index :categories, :category, unique: true
  end
end
