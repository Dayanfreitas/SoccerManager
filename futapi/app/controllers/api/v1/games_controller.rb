class Api::V1::GamesController < Api::V1::ApiController
    load_and_authorize_resource
    # before_action :require_authentication!

    def index
        @games = Game.all
        render json: @games, include: %i[enterprise]
    end
    
    def create
        @game = Game.new(game_params)

        if @game.save
            render json: @game, status: :created
        else
            render json: @game.errors, status: :unprocessable_entity
        end
    end

    def update
        render json: @access_type.errors, status: :unprocessable_entity unless @game.update(game_params)
    end

    def destroy
        @game.destroy
    end

    private
    
    def game_params
        params.permit(:date, :enterprise_id, :user_id)
    end
end
