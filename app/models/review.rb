class Review < ApplicationRecord
  validates :body, presence: true
  validates :biz_id, uniqueness: { scope: [:user_id], message: 'You already left a review for this business'}
  belongs_to :biz
  belongs_to :user
end
