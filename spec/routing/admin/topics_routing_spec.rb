require "rails_helper"

RSpec.describe Admin::TopicsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/admin/topics").to route_to("admin/topics#index")
    end

    it "routes to #new" do
      expect(:get => "/admin/topics/new").to route_to("admin/topics#new")
    end

    it "routes to #show" do
      expect(:get => "/admin/topics/1").to route_to("admin/topics#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/admin/topics/1/edit").to route_to("admin/topics#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/admin/topics").to route_to("admin/topics#create")
    end

    it "routes to #update" do
      expect(:put => "/admin/topics/1").to route_to("admin/topics#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/admin/topics/1").to route_to("admin/topics#destroy", :id => "1")
    end

  end
end
