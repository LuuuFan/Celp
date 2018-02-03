@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rate
    json.set! :biz, review.biz.name
    json.set! :user, review.user.username
  end
end
