class DrinksController < ApplicationController
    before_action :set_drink, only: [:show, :destroy]
    
    def index
        @drinks = Drink.all

        render json: @drinks, include: [:comments], except: [:created_at, :updated_at]
    end

    def show 
        drink = Drink.find_by_id(params[:id])
        if !drink
            render json: { error: "No drink found by that ID", status:400 }, status: 400
        else
            render json: drink, include: [:comments]
        end
    end

    def create 
        drink = Drink.create(drink_params)
        render json: drink, status: 200
    end

    def destroy 
        @drink.destroy
    end

    private

    def set_drink
        @drink = Drink.find(params[:id])
    end 

    def drink_params 
        params.require(:drink).permit(:name, :caffeine)
    end 
end