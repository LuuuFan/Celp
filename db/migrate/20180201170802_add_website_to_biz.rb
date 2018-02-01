class AddWebsiteToBiz < ActiveRecord::Migration[5.1]
  def change
    add_column :bizs, :website, :string
  end
end
