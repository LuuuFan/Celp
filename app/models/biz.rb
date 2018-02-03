class Biz < ApplicationRecord
  validates :name, :address1, presence: true

  has_many :imgs
  has_many :reviews

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

  def set_img
    if self.img_url.nil? && self.imgs.length > 0
      self.img_url = self.imgs.first.url
    elsif self.img_url.nil?
      self.img_url = "https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png"
    end
    self.save
    self.img_url
  end

  private

end
