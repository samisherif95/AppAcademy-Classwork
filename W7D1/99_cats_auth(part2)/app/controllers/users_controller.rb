class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    
    if @user.save!
      log_in!(@user)
      redirect_to cats_url
    else
      render json: @user.erros.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
