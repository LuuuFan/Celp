class CreateBizs < ActiveRecord::Migration[5.1]
  def change
    create_table :bizs do |t|
      t.string :name, null: false
      t.string :address1, null: false
      t.string :address2
      t.string :address3
      t.string :city
      t.string :zip_code
      t.string :state
      t.float :lat
      t.float :lng
      t.string :price
      t.string :phone
      t.timestamps
    end

    add_index :bizs, :name
  end
end
