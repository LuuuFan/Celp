class AddRateToReview < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :rate, :integer, null: false, default: 0
  end
end
