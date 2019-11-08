def my_uniq(array)
  array.uniq!
end

class Array
  def two_sum
    result = []

    (0...length).each do |start_idx|
      (start_idx...length).each do |end_idx|
        if end_idx > start_idx && self[start_idx]+ self[end_idx] == 0
          result << [start_idx,end_idx]
        end
      end
    end
    result
  end
end

def my_transpose(arr)
  results = []
  (0...arr.length).each do |i|
    sub = []
    (0...arr.length).each do |j|
      sub << arr[j][i]
    end
    results << sub
  end
  results
end

def stock_picker(array)
  largest_diff = 0 
  pair = []
  (0...array.length).each do |start_idx|
    (0...array.length).each do |end_idx|
      if end_idx > start_idx && (array[end_idx] - array[start_idx]) > largest_diff
        largest_diff = array[end_idx] - array[start_idx]
        pair = [start_idx,end_idx] 
      end
    end
  end
  pair
end

class TowersHanoi
  attr_accessor :tower1,:tower2,:tower3
  def initialize
    @tower1 = [3,2,1]
    @tower2 = []
    @tower3 = []
  end
  def won?
    @tower1.empty? && @tower2.empty?
  end

  def move(from,to)
    return false if from.empty?
    temp = from.shift
    if to.empty? || to.first > temp 
      to.unshift(temp)
      return true
    else
      return false
    end
  end
end