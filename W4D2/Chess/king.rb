require_relative "piece.rb"
require_relative "stepable.rb"
class King < Piece
  include Stepable
  attr_reader :symbol
  KING_MOVES = [[-1,1],[0,1],[1,1],[-1,0],[1,0],[-1,-1],[0,-1],[1,-1]]

  def initialize(color,board,pos)
    super(color,board,pos)
    @symbol = :King
  end

  protected
  def moves_diffs
    return KING_MOVES
  end
end
