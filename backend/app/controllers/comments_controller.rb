class CommentsController < ApplicationController
    def index
        @comments = Comment.all

        render json: @comments, except: [:created_at, :updated_at]
    end 

    def create 
        comment = Comment.create(comment_params)

        render json: comment, status: 200
    end 

    private 

    def comment_params 
        params.require(:comment).permit(:summary, :drinks_id)
    end 
end
