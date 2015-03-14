require 'rails_helper'

RSpec.describe "admin/topics/edit", type: :view do
  before(:each) do
    @admin_topic = assign(:admin_topic, Admin::Topic.create!())
  end

  it "renders the edit admin_topic form" do
    render

    assert_select "form[action=?][method=?]", admin_topic_path(@admin_topic), "post" do
    end
  end
end
