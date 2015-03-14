class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :title
      t.text :content
      t.text :description
      t.integer :category_id
      t.integer :status

      t.timestamps null: false
    end
  end
end
