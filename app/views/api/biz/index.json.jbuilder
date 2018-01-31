@bizes.each do |biz|
  json.set! biz.id do
    json.partial! 'biz', biz: biz
  end
end
