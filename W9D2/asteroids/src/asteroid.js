const MovingObject = require('./moving_object.js');
const Utilities = require('./utils.js');
const Ship = require('./ship.js');


function Asteroid(pos,game) {
  obj = {
    color: Asteroid.COLOR,
    radius: Asteroid.RADIUS,
    pos: pos,
    vel: Utilities.randomVec(5),
    game: game
  };
  MovingObject.call(this, obj);
}

Utilities.inherits(Asteroid,MovingObject);

Asteroid.prototype.collideWith = function (otherObject){
  if(otherObject instanceof Ship){
    otherObject.relocate(this.game);
  }
};



Asteroid.COLOR = "#00FF00";
Asteroid.RADIUS = 20;

module.exports = Asteroid;