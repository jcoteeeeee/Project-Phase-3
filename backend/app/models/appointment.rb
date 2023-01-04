class Appointment < ApplicationRecord
    belongs_to :clients
    belongs_to :tattoo
    belongs_to :artist
end
