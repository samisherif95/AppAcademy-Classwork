class UsersController < ApplicationController
  def index
    @user = User.all 
    render :index 
  end
  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_url(@user)
    else
      render :new
    end   
  end

  def new
    @user = User.new
    render :new
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
