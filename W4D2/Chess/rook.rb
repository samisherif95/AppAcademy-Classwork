require_relative "slideable.rb"
require_relative "piece.rb"

class Rook < Piece
  include Slideable
  ROOK_MOVES = [[0,1],[0,-1],[1,0],[-1,0]]
  attr_reader :symbol
  def initialize(color,board,pos)
    super(color,board,pos)
    @symbol = :Rook
  end

  def moves_dirs
    return ROOK_MOVES
  end
end



