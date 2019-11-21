class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(params.require(:user).permit(:name,:email))
    # replace the `user_attributes_here` with the actual attribute keys
    if user.save
      render json: user
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
    if user.update(params.require(:user).permit(:name,:email))
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


  
end