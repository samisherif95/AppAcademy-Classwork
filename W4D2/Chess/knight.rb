require_relative "piece.rb"
require_relative "stepable.rb"
class Knight < Piece
  include Stepable
  attr_reader :symbol
  KNIGHT_MOVES = [[-2,1],[2,1],[1,-2],[-1,2],[1,2],[-2,-1],[-1,-2],[2,-1]]

  def initialize(color,board,pos)
    super(color,board,pos)
    @symbol = :Knight
  end
 
  protected
  def moves_diffs
    return KNIGHT_MOVES
  end
end