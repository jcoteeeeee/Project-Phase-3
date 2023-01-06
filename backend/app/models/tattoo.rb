class Tattoo < ApplicationRecord
    has_many :appointments
    has_many :artists, through: :appointments
    has_many :clients, through: :clients
end
