class MaxIntSet
  attr_accessor :store
  def initialize(max)
    @store = Array.new(max,false)
  end

  def insert(num)
    raise "Out of bounds" if !num.between?(0, store.length)
    store[num] = true
  end

  def remove(num)
    store[num] = false
  end

  def include?(num)
    return false if num < 0
    false unless store[num]
    store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    return false unless self[num]
    self[num].include?(num)
  end

  private
  attr_reader :store
  def [](num)
    @store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count == num_buckets
    unless self.include?(num)
      # resize! if @count == num_buckets
      self[num] << num
      @count += 1
    end
  end

  def remove(num)
    if self[num].include?(num)
      @count -= 1
      self[num].delete(num)
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_eles = @store.flatten 
    @store = Array.new(num_buckets*2){Array.new}
    @count = 0
    old_eles.each{ |ele| self.insert(ele)}
  end
end
