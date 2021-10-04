class Player < ApplicationRecord
    belongs_to :user
    belongs_to :position
    
    validates :name, :number, presence: true
end
