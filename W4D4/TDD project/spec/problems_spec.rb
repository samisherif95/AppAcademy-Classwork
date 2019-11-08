require 'problems.rb'
require 'rspec'

describe "#uniq" do
  it "should remove all duplicated inside of an array and return the condensed array " do
    expect(my_uniq([1,2,1,3,3])).to eq([1,2,3])
  end
end 
describe "Array" do
  describe "#two_sum" do
    it "it should return a pair of indices where two positions sum up to zero" do 
      expect([-1,0,2,-2,1].two_sum).to eq([[0,4],[2,3]])
    end
  end
end

describe "my_transpose" do
  it "should switch out the rows for the colums and vice versa" do
    expect(my_transpose([[0,1,2],[3,4,5],[6,7,8]])).to eq([[0,3,6],[1,4,7],[2,5,8]])
  end

end

describe "stock_picker" do
  it "gets hightest stock buy in a set of days" do 
    expect(stock_picker([2,4,3,8,7,10])).to eq([0,5])
  end
end

describe "TowersOfHanoi" do
  
  describe "#won?" do
    subject(:game){TowersHanoi.new}
    before(:each) do
      game.tower1 = []
      game.tower2 = []
      game.tower3 = [1,2,3]
    end
    it "checks to see if tower 1 and tower 2 are empty? if true you win" do
      expect(game.tower1.empty? && game.tower2.empty?).to be(true)
    end
  end
  describe "#move" do
    subject(:game){TowersHanoi.new}
    before(:each) do
      game.tower1 = [2,3]
      game.tower2 = [1]
      game.tower3 = []
    end
    context " moves values form one tower to the next, but cant place big value on top of small value" do
      it "when move invalid?" do
        expect(game.move(game.tower1,game.tower2)).to be(false)
      end
       it "when move valid" do
        expect(game.move(game.tower1,game.tower3)).to be(true)
      end
    end
  end
end