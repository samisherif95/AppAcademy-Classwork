require_relative "./employee.rb"
class Manager < Employee
  attr_reader :salary, :boss, :employees
  def initialize(name,salary,title,boss=nil)
    super(name,salary,title, boss)
    @employees = []
  end

  def is_manager(employee)
    @employees << employee if (employee.boss == self)
  end

  def bonus(multiplier)
    total = 0
    emps = self.get_emp
    emps.each do |emp|
      total+= emp.salary
    end
    bonus = total * multiplier

    # total = 0
    # @employees.each do |emp|
    #   total += emp.salary
    #   # if emp.is_a? Manager
    #   if emp.title == "manager"
    #     total += emp.bonus(multiplier)
    #   end
    # end
    # bonus = total * multiplier
  end

  def get_emp
    result = @employees.map{|emp| emp.is_a?(Manager) ? get_emp(emp) : emp }
    result
  end
end

ned = Manager.new("Ned",1000000,"manager")
darren = Manager.new("Darren",78000,"manager",ned)
shawna = Employee.new("shawna",12000,"TA",darren)
david = Employee.new("David",10000,"TA",darren)

darren.is_manager(shawna)
darren.is_manager(david)
ned.is_manager(darren)

p ned.employees

# p darren.employees
# p darren.get_emp
# p ned.employees
# p shawna.bonus(3)

 p ned.bonus(5) # => 500_000
# p darren.bonus(4) # => 88_000
# p david.bonus(3) # => 30_000
