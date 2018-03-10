class ReviewTag < ApplicationRecord
  belongs_to :review
  belongs_to :user
  validates :review_id, uniqueness: { scope: [:user_id, :tag]}
end
