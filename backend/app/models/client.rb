class Client < ApplicationRecord
    has_many :appointments
    has_many :tattoos, through: :appointments
    has_many :artists, through: :appointments
end
