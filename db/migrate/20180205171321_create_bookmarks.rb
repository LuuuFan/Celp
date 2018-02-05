class CreateBookmarks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.integer :user_id, null: false
      t.integer :biz_id, null: false
      t.timestamps
    end

    add_index :bookmarks, :user_id
    add_index :bookmarks, :biz_id
    add_index :bookmarks, [:user_id, :biz_id], unique: true

  end
end
