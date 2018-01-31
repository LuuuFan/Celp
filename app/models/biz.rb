class Biz < ApplicationRecord
  validates :name, :address1, presence: true
end
