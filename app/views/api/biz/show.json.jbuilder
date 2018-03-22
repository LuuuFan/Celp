# json.partial! '/api/biz/biz', biz: @biz

json.biz do
  json.extract! @biz, :id, :name, :phone, :price, :website,
                      :img_url, :lat, :lng, :biz_rate, :takes_reservations,
                      :delivery, :take_out, :credit_cards, :apple_pay,
                      :android_pay, :bitcoin, :parking, :bike_parking,
                      :wheelchair, :noise_level, :alcohol, :outdoor_seating,
                      :wifi, :has_tv, :dogs_allowed, :cats_allowed,
                      :waiter_service, :caters, :gender_neutral_restrooms, :is_open,
                      :display_address, :today_hour
  json.set! :location do
    json.extract! @biz, :address1, :address2, :address3, :city, :zip_code, :state
  end
  # json.set! :is_open, @biz.is_open
  # json.set! :display_address, @biz.display_address
  json.tags @biz.tags.pluck(:tag_name)
  json.img_ids @biz.img_ids
  # @biz.imgs.pluck(:id)
  json.review_ids @biz.review_ids
  # @biz.reviews.pluck(:id)
  json.total_reviews @biz.review_ids.length
  json.user_ids @biz.reviewed_user_ids
  # @biz.reviewed_users.pluck(:id)
  if current_user
    json.bookmarked? @biz.bookmarked?(current_user.id)
  end
  json.set! :hours do
    @biz.hours.each do |hour|
      json.set! hour.day do
        json.extract! hour, :day, :start, :end
      end
    end
  end
  # json.bookmarked_user_ids @biz.bookmarked_users.pluck(:id)
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
      json.extract! review, :id, :body, :rate, :updated_at, :user_id, :biz_id
      if current_user
        json.is_tagged_by_user review.is_tagged_by_user?(current_user.id)
      end
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
      json.set! :user_imgs_num, user.imgs.length
    end
  end
end
