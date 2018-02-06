class Review < ApplicationRecord
  validates :body, presence: true
  validates :biz_id, uniqueness: { scope: [:user_id], message: 'You already left a review for this business'}
  validates :rate, inclusion: {in: [1..5], message:"Please select a rate"}
  belongs_to :biz
  belongs_to :user
end
