#O(n!) because of permutations!!!
def first_anagram?(str, target_str)
  anagrams = str.chars.permutation.to_a
  anagrams.include?(target_str.chars)
end



#O(n)
def second_anagram?(str, target_str)
  hash = Hash.new(0)
  str.each_char {|char| hash[char]+=1}
  target_str.each_char {|char| hash[char]-=1}
  hash.all? { |k,v| v == 0 }
end

#O(nlog(n))
def third_anagram(str,target_str)
  str.chars.sort! == target_str.chars.sort!
end 

#O(n)
def fourth_anagram?(str,target_str)
  hash =Hash.new(0)
  hash2 = Hash.new(0)
  str.each{|char| hash[char]+=1}
  target_str.each{|char| hash2[char]+=1}
  hash == hash2
end