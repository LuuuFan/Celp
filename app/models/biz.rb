class Biz < ApplicationRecord
  validates :name, :address1, presence: true

  has_many :imgs, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :reviewed_users,
    through: :reviews,
    source: :user
  has_many :bookmarks, dependent: :destroy
  has_many :bookmarked_users,
    through: :bookmarks,
    source: :user
  has_many :hours, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :categorizing, dependent: :destroy
  has_many :categories, through: :categorizing

  def display_address
    address_arr = [self.address1, self.address2, self.address3, self.city, self.state, self.zip_code]
    @display_address = ''
    address_arr.each_with_index do |el, idx|
      if el && el.length > 0 && idx != address_arr.length - 1
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

  def assign(tag)
    old_tag = Tag.find_by(tag_name: tag.capitalize)
    if old_tag
      Tagging.create(biz_id: self.id, tag_id: old_tag.id)
    else
      Tag.create(tag_name: tag.capitalize)
      new_tag = Tag.find_by(tag_name: tag.capitalize)
      Tagging.create(biz_id: self.id, tag_id: new_tag.id)
    end
  end

  def category(cat)
    old_cat = Category.find_by(category: cat.capitalize)
    if old_cat
      Categorizing.create(category_id: old_cat.id, biz_id: self.id)
    else
      Category.create(category: cat.capitalize)
      new_cat = Category.find_by(category: cat.capitalize)
      Categorizing.create(category_id: new_cat.id, biz_id: self.id)
    end

  end

  private

end
