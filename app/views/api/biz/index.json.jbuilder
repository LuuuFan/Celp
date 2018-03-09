# @bizes.each do |biz|
#   json.set! biz.id do
#     json.partial! '/api/biz/biz', biz: biz
#   end
# end

@bizes.each do |biz|
  json.set! biz.id do
    json.extract! biz, :id, :name, :phone, :price, :img_url, :biz_rate, :lat, :lng, :is_open
    json.set! :tags, biz.tags.pluck(:tag_name)
    json.set! :location do
      json.extract! biz, :address1, :address2, :address3, :city, :state, :zip_code
    end
    json.set! :display_address, biz.display_address
    json.set! :reviews_num, biz.reviews.length
     if biz.review_sample
       json.set! :review_sample do
         json.extract! biz.review_sample, :body
         json.set! :user_url, biz.review_sample.user.avatar_url
       end
     end
  end
end
