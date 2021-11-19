class AuthenticationController < ActionController::API
    
    def login
        email = params[:email]
        password = params[:password]

        # render json: {email: User.where(email: email).first }, status: :ok
        render status: :ok
    end
end
