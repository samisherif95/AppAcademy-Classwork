require_relative "null_piece.rb"
require "byebug"
require_relative "./piece.rb"
require_relative "pawn.rb"
require_relative "rook.rb"
require_relative "queen.rb"
require_relative "bishop.rb"
require_relative "knight.rb"
require_relative "king.rb"

class Board
  attr_reader :sentinel
  def initialize
    @sentinel = Null_Piece.instance
    @grid = Array.new(8) { Array.new(8,@sentinel) }
    # @sentinel = nullpiece.instance
    self.place_piece
  end

  def move_piece(start_pos, end_pos)
    raise if self[start_pos] == nil
    raise if valid_pos?(end_pos)
    self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
  end

  def valid_pos?(pos)

  end

  def [](position)
    row, col = position
    @grid[row][col]
  end

  def []=(position, value)
    row, col = position
    @grid[row][col] = value
  end

  def place_piece
    @grid.each_with_index do |row, i|
      8.times do |j|
        if [1].include?(i)
          @grid[i][j] = Pawn.new(:W,self,[i, j])
        elsif [6].include?(i)
          @grid[i][j] =Pawn.new(:B,self,[i, j])
        elsif [2,3,4,5].include?(i)
          @grid[i][j] = Null_Piece.instance
        end
      end
    end

    8.times do |i|
      if [0,7].include?(i)
        @grid[0][i] = Rook.new(:W,self,[0, i])
        @grid[7][i] = Rook.new(:B,self,[7, i])
      elsif [1,6].include?(i)
        @grid[0][i] = Knight.new(:W,self,[0, i])
        @grid[7][i] = Knight.new(:B,self,[7, i])
      elsif [2,5].include?(i)
        @grid[0][i] = Bishop.new(:W,self,[0, i])
        @grid[7][i] = Bishop.new(:B,self,[7, i])
      elsif i == 3
        @grid[0][i] = King.new(:W,self,[0, i])
        @grid[7][i] = King.new(:B,self,[7, i])
      else
        @grid[0][i] = Queen.new(:W,self,[0, i])
        @grid[7][i] = Queen.new(:B,self,[7, i])
      end
    end


  end

end
