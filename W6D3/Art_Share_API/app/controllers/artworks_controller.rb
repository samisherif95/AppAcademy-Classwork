class ArtworksController < ApplicationController
  def index
    artworks = Artwork.all
    render json: artworks
  end

  def create
    artwork = Artwork.new(artwork_params)
    # replace the `artwork_attributes_here` with the actual attribute keys
    if artwork.save
      redirect_to artwork_url(artwork)
    else
      render json: artwork.errors.full_messages
    end
  end

  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end

  def update
    artwork = Artwork.find(params[:id])
    if artwork.update(artwork_params)
      redirect_to artwork_url(artwork)
    else
      render json: artwork.errors.full_messages
    end
  end


  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end


  private
  def artwork_params
    params.require(:artwork).permit(:artist_id, :title, :image_url)
  end
end
