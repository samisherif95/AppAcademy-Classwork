class SessionsController < ApplicationController
before_action :require_logged_in, only:[:index]

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      log_in!(user)
      redirect_to user_url(user)
      # User.reset_session_token!
    else
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def destroy
    if @current_user
      @current_user.reset_session_token!
    end

    session[:session_token] = nil
  end




end
