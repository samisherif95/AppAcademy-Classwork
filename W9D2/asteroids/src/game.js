// const MovingObject = require('./moving_object.js');
// const Utilities = require('./utils.js');
const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');

function Game (canvas){
  this.ctx = canvas.getContext('2d');
  this.canvas = canvas;
  this.dimensions = { width: canvas.width,height: canvas.height};
  this.asteroids = [];
  this.ship = new Ship(this.randomPosition(),this);

  while (this.asteroids.length < Game.ASTEROIDS){
    this.addAsteroids();
  }
  console.log(this.asteroids);
}

Game.prototype.addAsteroids =function(){
  let aster = new Asteroid(this.randomPosition(),this);
  this.asteroids.push(aster);
};

Game.prototype.randomPosition = function(){
  return [Math.floor(Math.random() * this.dimensions['width']), Math.floor(Math.random() * this.dimensions['height'])];
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, this.dimensions['width'], this.dimensions['height']);
  this.allObjects().forEach(ast => {
    ast.draw(ctx);
  });
};

Game.prototype.moveObjects = function(){
  this.allObjects().forEach(ast =>{
    ast.move();
  });

};

Game.prototype.wrap = function(pos){
  if(pos[0] > Game.DIM_X+Asteroid.RADIUS){
    pos[0] = 0;
  } else if (pos[0] < 0 - Asteroid.RADIUS){
    pos[0]= 1000;
  }
  if (pos[1] > Game.DIM_Y + Asteroid.RADIUS) {
    pos[1] = 0;
  } else if (pos[1] < 0 - Asteroid.RADIUS) {
    pos[1] = 600;
  }

  return pos;
};

Game.prototype.checkCollisions = function(){
  this.allObjects().forEach(obj1 => {
    this.allObjects().forEach(obj2 => {
      if (obj1.isCollidedWith(obj2) && obj1 !== obj2){
        obj1.collideWith(obj2);
      }
    });
  });
};

Game.prototype.step = function(){
  this.moveObjects();
  this.checkCollisions();

};
Game.prototype.remove = function(aster){
  index_of_aster = this.asteroids.indexOf(aster);
  // delete asteroids[index_of_aster];
  this.asteroids = this.asteroids.slice(0,index_of_aster).concat(this.asteroids.slice(index_of_aster+1));
};

Game.prototype.allObjects = function (){
  let objects = [...this.asteroids];
  objects.push(this.ship);
  return objects;
};

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.ASTEROIDS = 10;

module.exports= Game;