module Abilities
    class PlayerAbility <  Abilities::BaseAbility
        
        def initialize(user)
            super()
            can :read, PlayerGame
            can :read, Position
            can %i[create update destroy], PlayerGame, player_id: user.player.id
            can %i[read], User, id: user.id
        end
        
        #     # byebug    
        #     # can :manage, :all
        #     if user.admin?
        #         can :manage, :all
        #     else
        #         # AccessType
        #         can :create, AccessType
        #         can :update, AccessType
        #         can :read, AccessType
        #         can :destroy, AccessType
                
        #         # Position 
        #         can :create, Position
        #         can :update, Position
        #         can :read, Position
        #         can :destroy, Position

        #         # Entreprise 
        #         can :read, Enterprise
        #         can :update, Enterprise
        #         can :create, Enterprise
        #         can :destroy, Enterprise

        #         # can :read, User
        #         can :read, User
        #         can :create, User
        #         can :update, User
        #         can :destroy, User

        #         # GAME
        #         can :read, Game
        #         can :create, Game
        #         can :update, Game
        #         can :destroy, Game

        #         # can :read, PlayerGame, player: { id: user.player.id }, game: { id: params[:game_id] }
        #         # can :read, PlayerGame
                
        #         # PlayerGame
        #         can :read, PlayerGame, game: { id: params[:game_id] }
        #         can :create, PlayerGame, player_id: user.player.id
        #         can :update, PlayerGame, player_id: user.player.id
        #         can :destroy, PlayerGame, player_id: user.player.id
        #     end
    end
end
