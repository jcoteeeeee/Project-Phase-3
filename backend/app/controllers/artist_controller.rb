class ArtistController < ApplicationController
    def index
        artsists = Artist.all 
        render json: artists
    end

    def show 
        artist = Artist.find_by!(id: params [:id])
        render json: artist
    end 

    def create 
        artist = Artist.create(first_name: , last_name: , email: )
        render json: artist
    end

    def update 
        artist = Artist.find_by!(id: params[:id])
        artist.update(first_name: , last_name: , email: )
        render json: artist 
    end 

    def destroy 
        artist = Artist.find_by!(id: params[:id])
        artist.destroy
    end

end
