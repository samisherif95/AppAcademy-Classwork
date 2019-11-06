# require "null_piece"
require "byebug"
require_relative "./piece.rb"

class Board

  def initialize
    @grid = Array.new(8) {Array.new(8)}
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
        if [0,1,6,7].include?(i)
          @grid[i][j] = Piece.new
        else
          @grid[i][j] = nil
        end
      end
    end
  end
end