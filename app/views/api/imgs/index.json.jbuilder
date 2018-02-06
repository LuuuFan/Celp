@imgs.each do |img|
  json.set! img.id do
    json.extract! img, :id, :url, :description, :created_at, :user_id
    json.set! :biz, img.biz.name
    json.set! :user, img.user.username
    json.set! :biz_img_url, img.biz.img_url
  end
end
