require 'rails_helper'

RSpec.describe "Admin::Topics", type: :request do
  describe "GET /admin_topics" do
    it "works! (now write some real specs)" do
      get admin_topics_path
      expect(response).to have_http_status(200)
    end
  end
end
