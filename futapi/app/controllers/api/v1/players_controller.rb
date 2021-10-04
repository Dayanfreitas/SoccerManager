class Api::V1::PlayersController < Api::V1::ApiController
    # load_and_authorize_resource
    before_action :set_player, only: %i[update]

    def index
        @players = Player.all
        render json: @players, include: %i[position]
    end

    def create
        @player = Player.new(create_params)

        if @player.save
            render json: @player
        else
            render json: @player.errors, status: :unprocessable_entity
        end
    end

    def update 
        if @player.update(create_params)
            render json: @player
        else
            render json: @player.errors, status: :unprocessable_entity
        end
    end

    private
    def set_player
        @player = Player.find(params[:id])
    end

    def create_params
        params.require(:player).permit(:name, :number, :stars, :position_id)
    end
end
