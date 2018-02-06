class CreateHours < ActiveRecord::Migration[5.1]
  def change
    create_table :hours do |t|
      t.integer :biz_id, null: false
      t.integer :day, null: false
      t.string :start, null: false
      t.string :end, null: false
      t.timestamps
    end
    add_index :hours, :biz_id
  end
end
