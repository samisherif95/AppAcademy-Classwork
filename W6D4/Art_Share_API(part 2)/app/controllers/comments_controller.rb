class CommentsController < ApplicationController
  def index
    comments = Comment.all
    if params.has_key?(:comment_id)
      comments = Like.where("likable_id = #{params[:comment_id]} AND likable_type = 'Comment'")
    end
    render json: comments
  end

  def create
    comment = Comment.new(comment_param)
    # replace the `artwork_attributes_here` with the actual attribute keys
    if comment.save
      render json: comment
    else
      comment.errors.full_messages
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end


  private
  def comment_param
    params.require(:comment).permit(:user_id, :artwork_id,:body)
  end
end
