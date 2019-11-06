require_relative "./employee.rb"
require_relative "./manager.rb"

ned = Manager.new("Ned",1000000,"Founder")
darren = Manager.new("Darren",78000,"manager",ned)
shawna = Employee.new("shawna",12000,"TA",darren)
david = Employee.new("David",10000,"TA",darren)

darren.is_manager(shawna)
darren.is_manager(david)
ned.is_manager(darren)

p darren.employees
# p ned.employees
# p shawna.bonus(3)

# p ned.bonus(5) # => 500_000
# p darren.bonus(4) # => 88_000
# p david.bonus(3) # => 30_000
