class UsersController < ApplicationController
  def index
    if params[:user_id]
      likes = Like.where("user_id = #{params[:user_id]}")
      render json: likes
    elsif params[:favorite_id]
      favs = Favorite.where("user_id = #{params[:favorite_id]}")
      render json: favs
    else
      users = User.all
      if params[:query] 
        users = users.where("username like '#{params[:query]}%'")
      end
      render json: users
    end
  end

  def create
    user = User.new(user_params)
    # replace the `user_attributes_here` with the actual attribute keys
    if user.save
      redirect_to user_url(user)
    else
      render json: user.errors.full_messages
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      redirect_to user_url(user)
    else
      render json: user.errors.full_messages
    end
  end


  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end


  private
  def user_params
    params.require(:user).permit(:username)
  end

end