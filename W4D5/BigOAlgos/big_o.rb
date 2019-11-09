
#phase I : o(n^2)
def my_min(arr)
  smallest = arr[0]
  arr.each_with_index do |ele,idx1|
    (idx1+1...arr.length).each do |idx2|
      if idx2 != nil && smallest > arr[idx2]
        smallest =arr[idx2]
      end
    end
  end
  smallest 
end

# Phase II: o(n)
# def my_min(arr)
#   smallest = arr[0]
#   arr.each { |ele| smallest = ele if ele < smallest }
#   smallest
# end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5


# Phase I: o(n^3) ... maybe?
# def largest_contiguous_subsum(list)
#   result = []
#   (0...list.length).each do |idx1|
#     (0...list.length).each do |idx2|
#       if idx2 > idx1
#         result << list[idx1..idx2].sum
#       end
#     end
#   end
#   result.max
# end


# Phase II: 
def largest_contiguous_subsum(list)

  sum = 0
  largest = 0

  list.each do |num|
    sum += num
    sum = 0 if sum < 0
    largest = sum if largest < sum
  end
  largest
end
list = [2, 3, -6, 7, -6, 7]
#list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])


