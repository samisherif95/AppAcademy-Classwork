class CreateAddFavoritesToArtworks < ActiveRecord::Migration[5.2]
  def change
    add_column(:artworks, :favorite, :integer)
    add_column(:artwork_shares, :user_favorite, :integer)
  end
end
