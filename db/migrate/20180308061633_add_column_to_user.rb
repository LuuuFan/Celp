class AddColumnToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :phone_number, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :headline, :string
    add_column :users, :love, :string
    add_column :users, :find_me_in, :string
    add_column :users, :multiple_email, :string
  end
end
