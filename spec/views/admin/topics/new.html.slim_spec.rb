require 'rails_helper'

RSpec.describe "admin/topics/new", type: :view do
  before(:each) do
    assign(:admin_topic, Admin::Topic.new())
  end

  it "renders new admin_topic form" do
    render

    assert_select "form[action=?][method=?]", admin_topics_path, "post" do
    end
  end
end
