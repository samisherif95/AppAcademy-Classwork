# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do 
    Todo.destroy_all
    titles = ['hello','our','names','are','Linda','and','sami']
    body =['we','are','so','fucking','awesome','and','cool']
    done =[true,false]

    titles.each do |title|
        Todo.create!(title: title, body: body.sample(), done:done.sample())
    end
end