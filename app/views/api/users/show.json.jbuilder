json.user do
  json.extract! @user, :id, :username, :email, :avatar_url, :img_ids, :review_ids, :reviewed_biz_ids, :bookmark_biz_ids
  json.set! :img_num, @user.img_ids.length
  json.set! :review_num, @user.review_ids.length
  json.set! :bookmark_num, @user.bookmark_biz_ids.length
end

json.imgs do
  @user.imgs.each do |img|
    json.set! img.id do
      json.extract! img, :url, :biz_id
    end
  end
  json.order @user.imgs.order(updated_at: :desc).pluck(:id)
end

json.reviews do
  @user.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rate, :updated_at, :biz_id
    end
  end
  json.order @user.reviews.order(updated_at: :desc).pluck(:id)
end

json.biz do
  @user.reviewed_biz.each do |biz|
    json.set! biz.id do
      json.extract! biz, :name
    end
  end
  @user.imged_biz.each do |biz|
    json.set! biz.id do
      json.extract! biz, :name
    end
  end
  @user.bookmark_biz.each do |biz|
    json.set! biz.id do
      json.extract! biz, :name
    end
  end
end
