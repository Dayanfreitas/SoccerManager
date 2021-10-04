class PlayerGame < ApplicationRecord
  # attr_accessor: :player, :game
  belongs_to :player
  belongs_to :game

  validates_uniqueness_of :player_id, scope: :game_id
end
