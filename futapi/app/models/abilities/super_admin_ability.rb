module Abilities
    class SuperAdminAbility <  Abilities::BaseAbility
        
        def initialize
            super()
            can :manage, :all
        end
        
    end
end
