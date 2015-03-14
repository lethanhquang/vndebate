class AddAttributeToUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :phone, :string
    add_column :users, :dob, :date
    add_column :users, :bio, :text
    add_column :users, :user_type, :integer
    add_column :users, :user_status, :integer
  end
end
