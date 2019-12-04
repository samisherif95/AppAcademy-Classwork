class Post < ApplicationRecord
    validates :post_title, :content, presence: true
    belongs_to :user
    belongs_to :sub
    has_many :comments
end
