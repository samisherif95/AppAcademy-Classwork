require_relative "piece.rb"
require_relative "slideable.rb"

class Bishop < Piece
  include Slideable
  BISHOP_MOVES = [[1,1],[1,-1],[-1,-1],[-1,1]]
  attr_reader :symbol
  def initialize(color, board, pos)
    super(color, board, pos)
    @symbol = :Bishop
  end
  

  def moves_dirs
    return BISHOP_MOVES
  end
end