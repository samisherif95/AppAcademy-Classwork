Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted){
    sorted = true;
    for (let i = 0; i < this.length - 1; i++){
      if (this[i] > this[i+1]){
        [this[i], this[i+1]] = [this[i+1], this[i]];
        sorted = false;
      }
    }
  }
  return this;
}

// console.log([5,4,3,2,1].bubbleSort());

String.prototype.substrings = function(){
  let result = [];
  for(let i = 0; i < this.length; i++){
    let subresult = [];
    for(let k = i + 1; k < this.length + 1; k++){
      // console.log(this.slice(i,k));
      result.push(this.slice(i, k));
    }
    // result.push(subresult);
  }
  return result;
};

// console.log("test".substrings());