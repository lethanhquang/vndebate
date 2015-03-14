require 'rails_helper'

RSpec.describe "admin/topics/index", type: :view do
  before(:each) do
    assign(:admin_topics, [
      Admin::Topic.create!(),
      Admin::Topic.create!()
    ])
  end

  it "renders a list of admin/topics" do
    render
  end
end
