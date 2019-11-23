# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.delete_all
CatRentalRequest.delete_all

harry = Cat.create!(name: "Harry", birth_date: '2017/05/29', color: 'Brown', sex: 'M', description: 'The most amazing cat in the world')
cammy = Cat.create!(name: "Cammy", birth_date: '2018/11/22', color: 'White', sex: 'F', description: 'Had an amazing birth, 12 hours!!!')
bruce = Cat.create!(name: "Bruce Wayne", birth_date: '2016/11/22', color: 'Black', sex: 'M', description: 'Really shy')


request1 = CatRentalRequest.create!(cat_id: harry.id, start_date: "2019/10/10", end_date:"2019/10/15", status:"Approved")
request2 = CatRentalRequest.create!(cat_id: cammy.id, start_date: "2019/11/11", end_date:"2019/11/25", status:"Approved")
request3 = CatRentalRequest.create!(cat_id: harry.id, start_date: "2019/12/10", end_date:"2019/12/15", status:"Pending")

