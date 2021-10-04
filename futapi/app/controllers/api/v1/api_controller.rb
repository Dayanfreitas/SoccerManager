module Api::V1
    class ApiController < ApplicationController
      acts_as_token_authentication_handler_for User
      # load_and_authorize_resource 
      before_action :authenticate_user!
      
      private
      # def require_authentication!        
      #   render json: { msg: 'Token não informado' }, status: :forbidden unless current_user.presence
      #   throw(:warden, scope: :user) unless current_user.presence
      # end
    end
end