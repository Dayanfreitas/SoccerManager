require "test_helper"

class Api::V1::EntreprisesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @entreprise = entreprises(:one)
  end

  test "should get index" do
    get entreprises_url, as: :json
    assert_response :success
  end

  test "should create entreprise" do
    assert_difference('Entreprise.count') do
      post entreprises_url, params: { entreprise: { name: @entreprise.name } }, as: :json
    end

    assert_response 201
  end

  test "should show entreprise" do
    get entreprise_url(@entreprise), as: :json
    assert_response :success
  end

  test "should update entreprise" do
    patch entreprise_url(@entreprise), params: { entreprise: { name: @entreprise.name } }, as: :json
    assert_response 200
  end

  test "should destroy entreprise" do
    assert_difference('Entreprise.count', -1) do
      delete entreprise_url(@entreprise), as: :json
    end

    assert_response 204
  end
end
