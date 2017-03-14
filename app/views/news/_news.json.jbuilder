json.extract! news, :id, :title, :subtitle, :body, :published, :active, :author, :created_at, :updated_at
json.url news_url(news, format: :json)
