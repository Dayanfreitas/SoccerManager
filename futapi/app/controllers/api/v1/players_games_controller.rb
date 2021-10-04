class Api::V1::PlayersGamesController < Api::V1::ApiController
    load_and_authorize_resource class: PlayerGame

    def index
        # byebug
        # @players_games = PlayerGame.all
        render json: @players_games, include: %i[game player]
    end

    def create
        @player = @players_game.player
        
        @players_game = PlayerGame.create(create_params)
        @players_game.player = @player

        if @players_game.save
            render status: :created
        else
            render json: @players_game.errors, status: :unprocessable_entity
        end
    end

    def update
        render json: @players_game.errors, status: :unprocessable_entity unless @players_game.update(update_params)
    end

    def destroy
        @players_game.destroy
    end

    private 
     
    def create_params
        params.permit(:game_id, :status)
    end

    def update_params
        params.permit(:status)
    end
end
