class Artwork < ApplicationRecord
  validates :artist_id, presence: true
  validates :title, presence: true
  validates :image_url, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User

  has_many :shares,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :shares,
    source: :viewer

  has_many :comments,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: :Comment

  has_many :likes, :as => :likable

  has_one :favorite,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: :Favorite
end
