class Biz < ApplicationRecord
  validates :name, :address1, presence: true

  has_many :imgs
  has_many :reviews
  has_many :reviewed_users,
    through: :reviews,
    source: :user
  has_many :bookmarks
  has_many :bookmarked_users,
    through: :bookmarks,
    source: :user
  has_many :hours
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :categorizing, dependent: :destroy
  has_many :categories, through: :categorizing

  def display_address
    address_arr = [self.address1, self.address2, self.address3, self.city, self.state, self.zip_code]
    @display_address = ''
    address_arr.each_with_index do |el, idx|
      if el.length > 0 && idx != address_arr.length - 1
        @display_address += el + ', '
      elsif el
        @display_address += el
      end
    end
    @display_address
  end

  def biz_rate
    (self.reviews.average(:rate).to_f * 2).round(0) / 2.to_f
  end

  def set_img(url)
    self.img_url = url
    self.save
    self.img_url
  end

  def review_sample
    self.reviews.sample
  end

  def bookmarked?(userId)
    self.bookmarked_users.pluck(:id).include?(userId)
  end

  private

end
