@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rate
    json.set! :last_update, review.updated_at
    json.set! :biz, review.biz.name
    json.set! :user, review.user.username
    json.set! :user_avatar, review.user.avatar_url
  end
end
