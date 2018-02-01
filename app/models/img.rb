class Img < ApplicationRecord
  validates :url, presence: true
  belongs_to :user
  belongs_to :biz
end
