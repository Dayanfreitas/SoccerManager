module Abilities
    class BaseAbility
        include CanCan::Ability
        
        def initialize
            can :read, Game
            can :read, Player
            # can %i[create update destroy], PlayerGame, player_id: user.player.id
        end

    end
end
