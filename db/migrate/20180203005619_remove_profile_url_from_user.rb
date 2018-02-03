class RemoveProfileUrlFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profileUrl
  end
end
