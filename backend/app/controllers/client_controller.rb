class ClientController < ApplicationController
    def index 
        clients = Client.all 
        render json: clients 
    end 

    def show 
        client = Client.find_by(id: params[:id])
        render json: client
    end

    def create 

    end 

    def update 

    end 

    def destroy 

    end 
    
end
