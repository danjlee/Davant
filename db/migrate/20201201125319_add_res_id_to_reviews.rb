class AddResIdToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :res_id, :integer, null: false
    add_index :reviews, :res_id
  end
end
