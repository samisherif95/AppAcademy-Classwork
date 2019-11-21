class Like < ApplicationRecord
  belongs_to :likable, :polymorphic => true 

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  
    
  
end
