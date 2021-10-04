module Abilities
    class AdminAbility <  Abilities::BaseAbility
        
        def initialize(user)
            super()
            # can :read, AccessType
            can :read, Player

            can %i[read create update], Enterprise
            can %i[read create update], Position

            can :create, Game
            can %i[destroy update], Game, user: { id: user.id } 

            can %i[update destroy], Game, user: { id: user.id }
            
            can %i[read create], User
            # can :update, User 
        end
        
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

        # User
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
    end
end
