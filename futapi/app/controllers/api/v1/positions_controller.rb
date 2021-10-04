class Api::V1::PositionsController < Api::V1::ApiController 
    load_and_authorize_resource

    def index 
        @positions = Position.all
        render json: @positions
    end

    def create
        @position = Position.new(position_params)
        if @position.save
            render json: @position, status: :created
        else
            render json: @position.errors, status: :unprocessable_entity
        end
    end

    def update
        render json: @position.errors, status: :unprocessable_entity unless @position.update(position_params)
    end

    def destroy
        @position.destroy
    end

    private
    
    def position_params
        params.permit(:name, :initials)
    end
end
