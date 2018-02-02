# @bizes.each do |biz|
#   json.set! biz.id do
#     json.partial! '/api/biz/biz', biz: biz
#   end
# end

@bizes.each do |biz|
  json.set! biz.id do
    json.extract! biz, :id, :name, :phone, :price
    json.set! :img_url, biz.imgs.first.url
    json.set! :location do
      json.extract! biz, :address1, :address2, :address3, :city, :state, :zip_code
    end
    json.set! :display_address, biz.display_address
  end
end
