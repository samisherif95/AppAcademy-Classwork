require_relative "./slideable.rb"
require_relative "./piece.rb"
class Queen < Piece
  include Slideable
  attr_reader :symbol
  QUEEN_MOVES = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,-1],[-1,1]]

  def initialize(color,board,pos)
    super(color,board,pos)
    @symbol = :Queen
  end

  def moves_dirs
    return QUEEN_MOVES
  end
end