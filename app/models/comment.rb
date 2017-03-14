class Comment < ApplicationRecord
  belongs_to :news
  accepts_nested_attributes_for :news
end
