class Employee
  attr_reader :salary, :boss, :name
  def initialize(name,salary,title,boss=nil)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    bonus = @salary * multiplier
  end
end