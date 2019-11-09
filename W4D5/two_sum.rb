# o(n^3) brute force method
def bad_two_sum?(arr, target)

  pairs = []

  arr.each_with_index do |num, idx1|
    arr.each_with_index do |num1, idx2|
      pairs << [arr[idx], arr[idx2]] if idx2 > idx1
    end
  end

  sums = []
  pairs.each do |pair|
    sums << pair.sum
  end

  sums.include?(target)

end

# o(n^2) 
def not_as_bad_two_sum?(arr, target)

  arr.each_with_index do |num, idx1|
    arr.each_with_index do |num1, idx2|
      if idx2 > idx1
        return arr[idx] + arr[idx2] == target
      end
    end
  end

end

