@imgs.each do |img|
  json.set! img.id do
    json.extract! img, :id, :url, :description, :created_at
    json.set! :biz, img.biz.name
    json.set! :user, img.user.username
  end
end
