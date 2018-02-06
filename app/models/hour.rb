class Hour < ApplicationRecord
  validates :day, :start, :end, presence: true
  validates :start, :end, length: {is: 4}
  belongs_to :biz
end
