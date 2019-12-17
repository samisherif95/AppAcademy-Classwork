export default class Bird {
  constructor(dimensions){
    this.velocity = 0;
    this.dimensions = dimensions;
    this.height = (dimensions.height/3);
    this.width = (dimensions.width/2);
  }

  drawbird(ctx){
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.height, this.width, 40, 30);
  }
  // animate(){
  //   this.drawbird(this.ctx);
  // }
}