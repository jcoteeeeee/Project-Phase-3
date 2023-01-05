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
        client = Client.create(first_name: , last_name: , email: )
        render client
    end 

    def update 
        client = Client.update!(id: params[:id])
        client.update(first_name: , last_name: , email: )
        render json: client
    end 

    def destroy 
        client = Client.find_by!(id: params[:id])
        client.destroy
    end 
    
end
