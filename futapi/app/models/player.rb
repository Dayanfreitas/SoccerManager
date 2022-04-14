class Player < ApplicationRecord
    belongs_to :user, dependent: :destroy
    belongs_to :position

    validates :name, :number, presence: true
end
