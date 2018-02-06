class Review < ApplicationRecord
  validates :body, presence: {message: 'Explain your rating to others.'}
  validates :biz_id, uniqueness: { scope: [:user_id], message: 'You already left a review for this business'}
  validates :rate, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5, message: 'Rate this business to submit your review.'}
  belongs_to :biz
  belongs_to :user
end
