class Review < ApplicationRecord
  validates :body, presence: true
  validates :biz_id, uniqueness: { scope: [:user_id] }
  belongs_to :biz
  belongs_to :user
end
