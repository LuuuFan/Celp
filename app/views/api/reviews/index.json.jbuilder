@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rate, :created_at, :updated_at
    json.set! :user, review.user.username
    json.set! :user_avatar, review.user.avatar_url
    json.set! :user_id, review.user.id
    json.set! :user_review_num, review.user.reviews.length
  end
  json.order @reviews.pluck(:id)
end
