class ChangeLoveColumnInUserToText < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :love, :text

  end
end
