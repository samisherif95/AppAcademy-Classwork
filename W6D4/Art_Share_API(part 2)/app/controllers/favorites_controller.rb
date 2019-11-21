class FavoritesController < ApplicationController
  def destroy
    fav = Favorite.find(params[:id])
    fav.destroy
    render json: fav
  end

   def index
    favs = Favorite.all
    render json: favs
  end

end
