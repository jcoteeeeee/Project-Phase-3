class Tattoo < ApplicationRecord
    has_many :appointments
    belongs_to :artists
    belongs_to :clients
end
