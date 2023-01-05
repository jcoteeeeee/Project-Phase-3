class ArtistsController < ApplicationController
    def index
        artists = Artist.all 
        render json: artists
    end

    def show 
        artist = Artist.find_by!(id: params[:id])
        render json: artist
    end 

    def create 
        artist = Artist.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
        render json: artist
    end

    def update 
        artist = Artist.find_by!(id: params[:id])
        artist.update(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
        render json: artist 
    end 

    def destroy 
        artist = Artist.find_by!(id: params[:id])
        artist.destroy
    end

end
