json.review do
  json.extract! @review, :id, :body, :rate, :updated_at, :user_id, :biz_id
  if current_user
    json.is_tagged_by_user @review.is_tagged_by_user?(current_user.id)
  end
end
