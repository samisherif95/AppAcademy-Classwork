// Array#uniq

Array.prototype.uniq = function(){
  let uniq_ele = [];
  for(let i = 0; i < this.length; i++) {
    if (uniq_ele.includes(this[i])){
      continue;
    }
    uniq_ele.push(this[i]);
  }
  return uniq_ele;
};

// Array#twoSum

Array.prototype.twoSum = function(){
  let result = [];
  for(let i = 0; i< this.length-1; i++){
    // console.log("length" + this.length);
    for(let k=i+1; k < this.length; k++){
      if (this[i] + this[k] === 0){
        result.push([i,k]);
      }
    }
  }
  return result;
};

// console.log([1,2,-1,3,-3,4,5].twoSum());

// Array#transpose

Array.prototype.transpose = function (){
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let sub_result = [];
    for (let k = 0; k < this.length; k++) {
      sub_result.push(this[k][i]);
    }
    result.push(sub_result);
  }
  return result;
}

// let arr = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr.transpose());
