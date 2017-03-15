class News < ApplicationRecord
  has_many :comments

  validates_presence_of :author
end
