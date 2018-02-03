class AddImgUrlToBiz < ActiveRecord::Migration[5.1]
  def change
    add_column :bizs, :img_url, :string
  end
end
