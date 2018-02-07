class CreateCategorizings < ActiveRecord::Migration[5.1]
  def change
    create_table :categorizings do |t|
      t.integer :biz_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    add_index :categorizings, :biz_id
    add_index :categorizings, :category_id
    add_index :categorizings, [:biz_id, :category_id], unique: true
  end
end
