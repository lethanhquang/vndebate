class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.text :content
      t.integer :topic_id
      t.integer :status

      t.timestamps null: false
    end
  end
end
