class SetUpDefaultValueForBiz < ActiveRecord::Migration[5.1]
  def change
    change_column :bizs, :address2, :string, default:''
    change_column :bizs, :address3, :string, default:''
    change_column :bizs, :city, :string, default:''
    change_column :bizs, :zip_code, :string, default:''
    change_column :bizs, :state, :string, default:''
    change_column :bizs, :price, :string, default:'$$'
    change_column :bizs, :phone, :string, default:''
  end
end
