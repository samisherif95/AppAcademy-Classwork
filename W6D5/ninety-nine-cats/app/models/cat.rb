COLORS = ['White', 'Black', 'Orange', 'Brown', 'Green']

class Cat < ApplicationRecord
    validates :birth_date ,:color ,:name ,:sex, :description , presence: true
    validates :sex ,inclusion: {in: ["M", "F"], message: "%{value} not a valid sex"}
    validates :color, inclusion: {in: COLORS, message: "%{value} not a valid color"}

    def age 
        2019 - birth_date.year 
    end

    has_many :cat_rentals,
        primary_key: :id,
        foreign_key: :cat_id,
        class_name: 'CatRentalRequest',
        dependent: :destroy
end
