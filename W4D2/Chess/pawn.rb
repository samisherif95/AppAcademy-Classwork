require_relative "piece.rb"
class Pawn < Piece
  attr_reader :symbol
  def initialize(color,board,pos)
    super(color,board,pos)
    @symbol = :Pawn
  end

  # def move_dirs
  #   x,y = pos
  #   if y ==  1 || y ==6 
  #     result << [0,2]
  #   end

  # end


end