class CreateRemovecolumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :sub_id
  end
end
