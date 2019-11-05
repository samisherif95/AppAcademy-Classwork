require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_accessor :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    if !prev_move_pos.nil?
      @prev_move_pos = prev_move_pos
    else
      @prev_move_pos = nil
    end
  end

  def losing_node?(evaluator)

  end

  def winning_node?(evaluator)

  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    nodes = []

    @board.each do |rows|
      @rows.each do |pos|
        if pos.empty?
          new_board = @board.dup
          new_board.add_mark(pos,next_mover_mark)
          new_node = TicTacToeNode.new(new_board,)

    



  end
end
