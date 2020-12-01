class RemoveRestIdFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :rest_id, :integer
  end
end
