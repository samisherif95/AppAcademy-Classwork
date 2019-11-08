
module Slideable
  # HORIZONTAL_DIRS = []
  # DIAGONAL_DIRS = []

  def moves
    x,y = pos
    result = []
    self.moves_dirs.each do |direction|
      while (x + direction[0]).between?(0, 7) && (y + direction[1]).between?(0, 7) && 
        self.board[[x + direction[0], y + direction[1]]] != self.board[[x + direction[0], y + direction[1]]].is_a?(Null_Piece)
        result << [x + direction[0], y + direction[1]]
        x += direction[0]
        y += direction[1]
      end
    end
    result
  end

  private
  def moves_dirs
    raise "No Set Moves"
  end 
end