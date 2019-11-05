require_relative "./00_tree_node.rb"
class KnightPathFinder


  MOVES = [
    [2,1],
    [2,-1],
    [1,2],
    [1,-2],
    [-2,1],
    [-2,-1],
    [-1,2],
    [-1,-2]
  ]
  attr_accessor :start_pos, :considered_positions, :root_node
  def initialize(start_pos)
    @start_pos = start_pos
    @considered_positions = [@start_pos]
    @root_node = PolyTreeNode.new(@start_pos)
    build_move_tree

  end

  def self.valid_positions(pos)
    result = []
    x,y = pos
    MOVES.each do |arr|
      temp1 = x + arr.first 
      temp2 = y + arr.last
      if temp1 <= 7 && temp2 <= 7 && temp1 > 0 && temp2 > 0 
        result << [temp1,temp2]
      end
    end
    result
  end

  def new_move_positions(pos)
    valid_positions = KnightPathFinder.valid_positions(pos)
    after_consider = valid_positions.reject{ |ele| @considered_positions.include?(ele) }
    after_consider.each do |position|
      @considered_positions << position
    end
    return after_consider
  end

  def build_move_tree
    nodes = [@root_node]
    until nodes.empty?
      node = nodes.shift

      new_move_positions(node.value).each do |next_pos|
        new_node = PolyTreeNode.new(next_pos)
        node.add_child(new_node)
        nodes << new_node
      end
    end
    @root_node
  end

  def trace_path_back(end_node)
    result = []
    cur_node = end_node
    until cur_node.nil?
      result << cur_node
      cur_node = cur_node.parent
    end 
    result 
  end

  def find_path(end_path)
   end_node = @root_node.bfs(end_path)
   trace_path_back(end_node).reverse.map(&:value)
  end
end