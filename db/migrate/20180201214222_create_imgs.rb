class CreateImgs < ActiveRecord::Migration[5.1]
  def change
    create_table :imgs do |t|
      t.integer :biz_id, null: false
      t.integer :user_id, null: false
      t.string :url, null: false
      t.timestamps
    end

    add_index :imgs, :biz_id
    add_index :imgs, :user_id
  end
end
