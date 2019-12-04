class UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            log_in_user!(user)
            # redirect_to #####
        else
            render :new
        end
    end

    def new
        @user = User.new
        render :new
    end

    def show
        @user = User.find_by(id: params[:id])
        # render :show
    end

    def user_params
        params.require(:user).permit(:email,:password)
    end

end

