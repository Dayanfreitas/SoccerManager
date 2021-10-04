class Enterprise < ApplicationRecord
    has_many :game
    validates :name, presence: true
end
