class ClientController < ApplicationController
    has_many :appointments
    has_many :tattoos, through: :appointments
    belongs_to :artist
end
