class ArtworkSharesController < ApplicationController


  def index
    artwork_shares = ArtworkShare.all
    render json: artwork_shares
  end

  def create
    artwork_share = ArtworkShare.new(artwork_share_param)
    # replace the `artwork_attributes_here` with the actual attribute keys
    if artwork_share.save
      render json: artwork_share
    else
      render json: artwork_share.errors.full_messages
    end
  end

  def destroy
    artwork_share = ArtworkShare.find(params[:id])
    artwork_share.destroy
    render json: artwork_share
  end


  private
  def artwork_share_param
    params.require(:artworkshare).permit(:artwork_id, :viewer_id)
  end
end
