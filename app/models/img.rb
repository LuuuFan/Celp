class Img < ApplicationRecord
  validates :url, presence: true
  belongs_to :user
  belongs_to :biz
  has_many :likes
  has_many :liked_user,
    through: :likes,
    source: :user
end
