class Api::V1::AccessTypesController < Api::V1::ApiController
  load_and_authorize_resource

  def index
    @access_types = AccessType.all
    render json: @access_types
  end

  def create
    @access_type = AccessType.new(access_type_params)
    if @access_type.save
      render json: @access_type, status: :created
    else
      render json: @access_type.errors, status: :unprocessable_entity
    end
  end

  def update
    render json: @access_type.errors, status: :unprocessable_entity unless @access_type.update(access_type_params)
  end

  def destroy
    @access_type.destroy
  end

  private
  
  def access_type_params
    params.permit(:name, :initials)
  end
end
