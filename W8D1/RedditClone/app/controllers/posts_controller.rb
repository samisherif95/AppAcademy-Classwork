class PostsController < ApplicationController
    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            redirect_to 
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def show
        @post = Post.find(params[:id])
    end

    def edit
        @post = Post.find(params[:id])
    end

    def update
        @post = current_user.posts.find(params[:id])
        @post.sub_id = params[:sub_id]
        if @post.update_attributes(post_params)
            redirect_to sub_url(@post.sub_id)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :edit
        end
    end

    private
    def post_params
        params.require(:post).permit(:post_title,:content)
    end


end
