class TattoosController < ApplicationController
    def index 
        tattoos = Tattoo.create
        render json: tattoos 
    end 

    def show 
        tattoo = Tattoo.find_by(id: params[:id])
        render json: tattoo
    end 

    def create 

    end 

    def update 

    end 

    def destroy 
        tattoo = Tattoo.find_by!(id: params[:id])
        tattoo.destroy 
    end 
    
end
