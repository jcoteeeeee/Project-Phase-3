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

    end

end
