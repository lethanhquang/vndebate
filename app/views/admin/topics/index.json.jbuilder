json.array!(@admin_topics) do |admin_topic|
  json.extract! admin_topic, :id
  json.url admin_topic_url(admin_topic, format: :json)
end
