require 'rails_helper'

RSpec.describe "admin/topics/show", type: :view do
  before(:each) do
    @admin_topic = assign(:admin_topic, Admin::Topic.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
