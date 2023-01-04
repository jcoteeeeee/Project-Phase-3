class Artist < ApplicationRecord
    has_many :appointments
    has_many :clients, through: :appointments
    has_many :tattoos, through: :appointments
end
