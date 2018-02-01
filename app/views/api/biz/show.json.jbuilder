# json.partial! '/api/biz/biz', biz: @biz

json.biz do

  json.extract! @biz, :id, :name, :phone, :price, :website
  json.set! :location do
    json.extract! @biz, :address1, :address2, :address3, :city, :zip_code, :state
  end
  json.set! :display_address, @biz.display_address
  json.img_ids @biz.imgs.pluck(:id)
end

json.imgs do
  @biz.imgs.each do |img|
    json.set! img.id do
      json.extract! img, :url
    end
  end
end
