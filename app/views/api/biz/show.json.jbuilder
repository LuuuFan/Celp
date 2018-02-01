# json.partial! '/api/biz/biz', biz: @biz

json.extract! @biz, :id, :name, :phone, :price
json.set! :location do
  json.extract! @biz, :address1, :address2, :address3, :city, :zip_code, :state
end
json.set! :display_address, @biz.display_address
