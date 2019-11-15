class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if @count == num_buckets
    unless self.include?(key)
      self[key] << key
      @count += 1
    end
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    if self[key].include?(key)
      @count -= 1
      self[key].delete(key)
    end
  end

  private

  def [](key)
    @store[key.hash % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
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
