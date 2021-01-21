class PostsController < ApplicationController
    before_action :set_post, only: [:show, :destroy]
    
    def index
        @posts = Post.all

        render json: @posts, except: [:created_at, :updated_at]
    end

    def show 
        render json: @post , except: [:created_at, :updated_at]
    end

    def create 
        post = Post.create(post_params)
        render json: post, status: 200
    end

    def destroy 
        @post.destroy
    end

    private

    def set_post
        @post = Post.find(params[:id])
    end 

    def post_params 
        params.require(:post).permit(:name, :caffeine)
    end 
end
