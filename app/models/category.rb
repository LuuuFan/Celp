class Category < ApplicationRecord
  validates :category, presence: true

  has_many :categorizings, dependent: :destroy
  has_many :biz, through: :categorizings
end
