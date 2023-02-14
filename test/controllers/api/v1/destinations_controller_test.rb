require "test_helper"

class Api::V1::DestinationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_destinations_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_destinations_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_destinations_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_destinations_destroy_url
    assert_response :success
  end
end
