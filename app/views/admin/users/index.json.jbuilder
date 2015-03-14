json.array!(@admin_users) do |admin_user|
  json.extract! admin_user, :id, :name, :email
  json.avatar admin_user.avatar.url(:thumb)
  json.url admin_user_path(admin_user)
end
