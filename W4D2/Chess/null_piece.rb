require "singleton"
require_relative "piece.rb"


class Null_Piece < Piece
  include Singleton
  attr_reader :symbol, :color
  def initialize
    @color = :W
    @symbol = ""
  end

  def moves
    ''
  end

end