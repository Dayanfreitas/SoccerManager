class AccessType < ApplicationRecord
    has_many :user, dependent: :restrict_with_error

    validates :name, :initials, presence: true
end
