Function.prototype.inherits = function(Parent){
  let Surrogate = function(){};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

moduleexports = inherit;