class Api::V1::EnterprisesController < Api::V1::ApiController
  load_and_authorize_resource

  def index
    @enterprises = Enterprise.all
    render json: @enterprises
  end

  # def show
  #   render json: @enterprise
  # end

  def create
    @enterprise = Enterprise.new(enterprise_params)

    if @enterprise.save
      render json: @enterprise, status: :created
    else
      render json: @enterprise.errors, status: :unprocessable_entity
    end
  end

  def update
    render json: @enterprise.errors, status: :unprocessable_entity unless @enterprise.update(enterprise_params)
  end

  def destroy
    @enterprise.destroy
  end

  private

  def enterprise_params
    params.permit(:name, :initials)
  end
end
