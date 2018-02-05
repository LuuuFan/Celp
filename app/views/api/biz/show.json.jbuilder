# json.partial! '/api/biz/biz', biz: @biz

json.biz do
  json.extract! @biz, :id, :name, :phone, :price, :website, :img_url, :biz_rate
  json.set! :location do
    json.extract! @biz, :address1, :address2, :address3, :city, :zip_code, :state
  end
  json.set! :display_address, @biz.display_address
  json.img_ids @biz.imgs.pluck(:id)
  json.review_ids @biz.reviews.pluck(:id)
  json.total_reviews @biz.reviews.pluck(:id).length
  json.user_ids @biz.reviewed_users.pluck(:id)
  json.bookmarked_user_ids @biz.bookmarked_users.pluck(:id)
end

json.imgs do
  @biz.imgs.each do |img|
    json.set! img.id do
      json.extract! img, :url
    end
  end
end

json.reviews do
  @biz.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rate, :updated_at
      json.set! :user_id, review.user.id
      # json.set! :user, review.user.username
      # json.set! :user_avatar, review.user.avatar_url
    end
  end
  json.order @biz.reviews.order(updated_at: :desc).pluck(:id)
end

json.set! :users do
  @biz.reviewed_users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :avatar_url, :username
      json.set! :user_review_num, user.reviews.length
    end
  end
end
