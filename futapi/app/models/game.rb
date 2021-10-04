class Game < ApplicationRecord
  belongs_to :enterprise
  belongs_to :user

  # after_create :
end
