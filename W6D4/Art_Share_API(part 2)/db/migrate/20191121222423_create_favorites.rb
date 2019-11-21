class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id , null: false
      t.integer :artwork_id, null: false
      t.timestamps
    end

    add_index(:favorites, [:user_id,:artwork_id], unique: true)
    add_index(:favorites, :user_id)
    add_index(:favorites, :artwork_id)
  end
end
