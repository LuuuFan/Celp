class CreateReviewTag < ActiveRecord::Migration[5.1]
  def change
    create_table :review_tags do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      t.string :tag, null: false
      t.timestamps
    end

    add_index :review_tags, :user_id
    add_index :review_tags, :review_id
    add_index :review_tags, [:review_id, :user_id, :tag], unique: true
  end
end
