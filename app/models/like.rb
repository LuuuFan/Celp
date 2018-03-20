class Like < ApplicationRecord
  belongs_to :img
  belongs_to :user
  validates :img_id, uniqueness: { scope: :user_id}
end
