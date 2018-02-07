class Tag < ApplicationRecord
  validates :tag_name, presence: true, uniqueness: true
  has_many :taggings, dependent: :destroy
  has_many :biz, through: :taggings
end
