class ClientsController < ApplicationController
    def index 
        clients = Client.all 
        render json: clients 
    end 

    def show 
        client = Client.find_by(id: params[:id])
        render json: client
    end

    def create 
        client = Client.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
        render client
    end 

    def update 
        client = Client.update!(id: params[:id])
        client.update(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
        render json: client
    end 

    def destroy 
        client = Client.find_by!(id: params[:id])
        client.destroy
    end 
    
end
