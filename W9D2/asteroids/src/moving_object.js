function MovingObject(obj){
  this.pos = obj['pos'];
  this.vel = obj['vel'];
  this.radius = obj['radius'];
  this.color = obj['color'];
  this.game = obj['game'];
}

MovingObject.prototype.move = function (){
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  newPos = this.game.wrap(this.pos);
  this.pos[0] = newPos[0];
  this.pos[1] = newPos[1];
};

MovingObject.prototype.draw = function (ctx){
  ctx.fillStyle = this.color;
  let centerX = this.pos[0];
  let centerY = this.pos[1];

  ctx.beginPath();
  ctx.arc(
    centerX,
    centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.isCollidedWith = function (otherMovingObject){
  // Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
  let dist = Math.sqrt((this.pos[0] - otherMovingObject.pos[0]) ** 2 + (this.pos[1] - otherMovingObject.pos[1]) ** 2);
  if (dist < (this.radius*2)){return true;}
};


MovingObject.prototype.collideWith = function(otherObject){
    // this.game.remove(this);
    // this.game.remove(otherObject);

    
};

module.exports = MovingObject;