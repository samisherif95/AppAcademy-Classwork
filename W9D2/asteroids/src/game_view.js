const Game = require('./game.js');

function GameView(ctx,game) {
  this.ctx = ctx;
  this.game = game;
  // this.game.addAsteroids();
}

GameView.prototype.start = function(){
  console.log(this);
  setInterval(this.game.step.bind(this.game), 20);
  setInterval(this.game.draw.bind(this.game, this.ctx), 20);
  // setInterval(function () { view.moveObjects(); view.draw(ctx); }, 20);
};

module.exports = GameView;