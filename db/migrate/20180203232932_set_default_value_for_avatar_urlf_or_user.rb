class SetDefaultValueForAvatarUrlfOrUser < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :avatar_url, :string, default: 'https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png'
  end
end
