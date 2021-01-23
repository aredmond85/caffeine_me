class DrinksController < ApplicationController
    before_action :set_drink, only: [:show, :destroy]
    
    def index
        @drinks = Drink.all

        render json: @drinks, except: [:created_at, :updated_at]
    end

    def show 
        render json: @drink , except: [:created_at, :updated_at]
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