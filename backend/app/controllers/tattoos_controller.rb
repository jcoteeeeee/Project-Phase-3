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
        tattoo = Tattoo.create(size: , location: , first_name: , color: )
        render json: tattoo
    end 

    def update 
        tattoo = Tattoo.find_by!(id: params[:id])
        tattoo.update!(size: , location: , first_name: , color: )
        render json: update
    end 

    def destroy 
        tattoo = Tattoo.find_by!(id: params[:id])
        tattoo.destroy 
    end 
    
end
