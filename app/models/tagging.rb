class Tagging < ApplicationRecord
  belongs_to :biz
  belongs_to :tag

  validates :tag_id, uniqueness: { scope: :biz_id}
end
