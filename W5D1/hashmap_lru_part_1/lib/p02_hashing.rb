# class Integer
#   # Integer#hash already implemented for you
# end

# class Array
#   def hash 
#     mod = self.inject(self[0].to_i.to_s(2)) do |acc, el| 
#       acc + el.to_s(2)
#     end
#     mod.to_i.hash
#   end
# end

# class String
#   def hash
#     sum = 0
#     self.each_char.with_index do |char, i| 
#       sum += char.ord * (i + 1)
#     end
#     sum.hash
#   end
# end

# class Hash
#   def hash
#     sorted = self.sort.flatten 
#     sorted.map!{|el| el.to_s.ord}.sum
#     sorted.hash
#   end
# end
