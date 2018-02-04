# json.partial! '/api/biz/biz', biz: @biz

json.biz do

  json.extract! @biz, :id, :name, :phone, :price, :website, :img_url
  json.set! :location do
    json.extract! @biz, :address1, :address2, :address3, :city, :zip_code, :state
  end
  json.set! :display_address, @biz.display_address
  json.img_ids @biz.imgs.pluck(:id)
  json.total_reviews @biz.reviews.pluck(:id).length
  json.review_ids @biz.reviews.pluck(:id)
end

json.imgs do
  @biz.imgs.each do |img|
    json.set! img.id do
      json.extract! img, :url
    end
  end
end

# json.reviews do
#   @biz.reviews.each do |review|
#     json.set! review.id do
#       json.extract! review, :body
#       json.set! :user_id, review.user.id
#       json.set! :user, review.user.username
#       json.set! :user_avatar, review.user.avatar_url
#     end
#   end
# end
