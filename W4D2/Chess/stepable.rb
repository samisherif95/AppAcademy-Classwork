
module Stepable
  def moves
    x,y = pos
    result_moves = []
    self.moves_diffs.each do |move| 
      result_moves << [x+move[0], y+move[1]]
    end
    result_moves.reject do |coord|
      !coord[0].between?(0,7) || !coord[1].between?(0,7) || self.board[coord] != nil
    end 
  end

  private
  def moves_diffs
    raise "No Set Moves"
  end 
end