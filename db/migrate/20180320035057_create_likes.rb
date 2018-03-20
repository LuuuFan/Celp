class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :img_id, null: false
      t.timestamps
    end

    add_index :likes, :user_id
    add_index :likes, :img_id
    add_index :likes, [:user_id, :img_id], unique: true
  end
end
