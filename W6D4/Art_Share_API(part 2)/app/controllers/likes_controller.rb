class LikesController < ApplicationController
  def index
    likes = Like.all
    render json: likes
  end

  def create
    like = Like.new(like_param)
    # replace the `artwork_attributes_here` with the actual attribute keys
    if like.save
      render json: like
    else
      like.errors.full_messages
    end
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy
    render json: like
  end


  private
  def like_param
    params.require(:like).permit(:user_id, :likable_id, :likable_type)
  end
end
