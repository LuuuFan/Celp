@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rate, :created_at, :updated_at
    json.set! :biz, review.biz.name
    json.set! :biz_id, review.biz.id
  end
end
