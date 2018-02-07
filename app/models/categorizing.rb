class Categorizing < ApplicationRecord
  belongs_to :biz
  belongs_to :category

  validates :category_id, uniqueness: {scope: :biz_id}
end
