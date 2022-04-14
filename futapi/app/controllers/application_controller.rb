class ApplicationController < ActionController::API
    include CanCan::ControllerAdditions

    rescue_from CanCan::AccessDenied do |exception|
        byebug
        Rails.logger.debug "Access denied on #{exception.action} #{exception.subject.inspect}"
        render json: {
            errors: "Não tem acesso"
        }, status: :forbidden
    end


    def render_resource(resource)
        if resource.errors.empty?
            render json: resource
        else
            validation_error(resource)
        end
    end

    def validation_error(resource)
        render json: {
            errors: [
                {
                status: '400',
                title: 'Bad Request',
                detail: resource.errors,
                code: '100'
                }
            ]
        }, status: :bad_request
    end
    
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities
    def current_ability
        controller_name_segments = params[:controller].split('/')
        controller_name = controller_name_segments.join('/').camelize
        @current_ability ||= load_permissions(params: params, controller_name: controller_name)
    end

    def load_permissions(params:, controller_name:)

        return Abilities::BaseAbility.new if current_user.blank?
        
        if current_user.super_user?
            Abilities::SuperAdminAbility.new
        elsif current_user.admin?
            Abilities::AdminAbility.new current_user
        elsif current_user.player?
            Abilities::PlayerAbility.new current_user
        else
            Abilities::BaseAbility.new
        end
    end
end
