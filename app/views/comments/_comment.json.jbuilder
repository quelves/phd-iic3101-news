json.extract! comment, :id, :author, :content, :published, :news_id, :created_at, :updated_at
json.url comment_url(comment, format: :json)
