const MovingObject = require('./moving_object.js');
const Utilities = require('./utils.js');

function Ship(pos,game){
  obj = {
    color: Ship.COLOR,
    radius: Ship.RADIUS,
    pos: pos,
    vel: [0,0],
    game: game
  };
  MovingObject.call(this, obj);
}



Utilities.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(game){
  this.pos = game.randomPosition();
  this.vel = [0,0];
};
module.exports = Ship;


Ship.COLOR = "red";
Ship.RADIUS = 20;




