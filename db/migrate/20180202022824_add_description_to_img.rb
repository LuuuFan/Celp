class AddDescriptionToImg < ActiveRecord::Migration[5.1]
  def change
    add_column :imgs, :description, :text
  end
end
