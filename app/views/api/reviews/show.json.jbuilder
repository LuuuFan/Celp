json.review do
  json.extract! @review, :id, :body, :rate
end

json.biz do
  json.extract! @review.biz, :id, :name, :phone, :price, :website, :img_url, :biz_rate
  json.set! :location do
    json.extract! @review.biz, :address1, :address2, :address3, :city, :zip_code, :state
  end
  json.set! :display_address, @review.biz.display_address
  json.img_ids @review.biz.imgs.pluck(:id)
  json.review_ids @review.biz.reviews.pluck(:id)
  json.total_reviews @review.biz.reviews.pluck(:id).length
  json.user_ids @review.biz.reviewed_users.pluck(:id)
end
