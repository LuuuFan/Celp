class Review < ApplicationRecord
  validates :body, presence: {message: 'Explain your rating to others.'}
  validates :biz_id, uniqueness: { scope: [:user_id], message: 'You already left a review for this business'}
  validates :rate, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5, message: 'Rate this business to submit your review.'}
  belongs_to :biz
  belongs_to :user
  has_many :review_tags
  has_many :taged_user,
    through: :review_tags,
    source: :user

  def is_tagged_by_user?(userId)
    self.review_tags.where(user_id: userId).pluck(:tag)
  end

end
