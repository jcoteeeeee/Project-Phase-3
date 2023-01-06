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
        tattoo = Tattoo.create(size: params[:size], location: params[:location], first_tattoo: params[:first_tattoo], color: params[:color])
        render json: tattoo
    end 

    def update 
        tattoo = Tattoo.find_by!(id: params[:id])
        tattoo.update!(size: params[:size], location: params[:location], first_tattoo: params[:first_tattoo], color: params[:color])
        render json: update
    end 

    def destroy 
        tattoo = Tattoo.find_by!(id: params[:id])
        tattoo.destroy 
    end 
    
end
