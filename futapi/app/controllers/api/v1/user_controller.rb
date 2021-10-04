class Api::V1::UserController < Api::V1::ApiController
    load_and_authorize_resource

    def index
        render json: @users, include: %i[access_type]
    end

    def create
        @user = User.new(create_params)

        if @user.save
            render status: :created
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
    
    def update
        render json: @user.errors, status: :unprocessable_entity unless @user.update(update_params)
    end

    def destroy
        @user.destroy
    end

    private
    
    def create_params
        params.permit(:email, :name, :password, :access_type_id, :image)
    end

    def update_params
        params.permit(:name, :email, :password, :image, :access_type_id)
    end

end
