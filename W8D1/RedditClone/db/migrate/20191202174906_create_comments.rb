class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body,null:false
      t.integer :user_id,null:false
      t.integer :post_id,null:false
      t.integer :sub_id, null:false
      t.timestamps
    end
    add_index(:comments,:user_id)
    add_index(:comments,:sub_id)
    add_index(:comments,:post_id)
  end
end
