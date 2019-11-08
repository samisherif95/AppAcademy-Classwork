require_relative "card.rb"

class Deck
  attr_accessor :deck
  def initialize
    @deck = []

    build_deck
    deck.shuffle!
  end

  def build_deck 
    suites = ["Spade", "Heart", "Diamond", "Club"]
    faces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
    
    suites.each do |suite|
      faces.each do |face|
        self.deck << Card.new(suite, face)
      end
    end
  end

  def draw
    return self.deck.pop
  end

end