class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rest_id, null: false
      t.integer :author_id, null: false
      t.integer :overall, null: false
      t.integer :food, null: false
      t.integer :ambience, null: false
      t.integer :service, null: false
      t.text :comment, null: false

      t.timestamps
    end
    add_index :reviews, :rest_id
    add_index :reviews, :author_id
  end
end
