class AddMoreInfoToBiz < ActiveRecord::Migration[5.1]
  def change
    add_column :bizs, :takes_reservations, :boolean, default: true
    add_column :bizs, :delivery, :boolean, default: false
    add_column :bizs, :take_out, :boolean, default: true
    add_column :bizs, :credit_cards, :boolean, default: true
    add_column :bizs, :apple_pay, :boolean, default: true
    add_column :bizs, :android_pay, :boolean, default: true
    add_column :bizs, :bitcoin, :boolean, default: false
    add_column :bizs, :parking, :string, default: 'Street'
    add_column :bizs, :bike_parking, :boolean, default: true
    add_column :bizs, :wheelchair, :boolean, default: true
    add_column :bizs, :noise_level, :string, default: "Quiet"
    add_column :bizs, :alcohol, :string, default: "Full Bar"
    add_column :bizs, :outdoor_seating, :boolean, default: true
    add_column :bizs, :wifi, :boolean, default: true
    add_column :bizs, :has_tv, :boolean, default: true
    add_column :bizs, :dogs_allowed, :boolean, default: true
    add_column :bizs, :cats_allowed, :boolean, default: true
    add_column :bizs, :waiter_service, :boolean, default: true
    add_column :bizs, :caters, :boolean, default: true
    add_column :bizs, :gender_neutral_restrooms, :boolean, default: true
  end
end
