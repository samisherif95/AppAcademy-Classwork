// Array#myEach(callback)

Array.prototype.myEach = function(callback) {
  for (let i =0; i < this.length; i++) {
    callback(this[i]);
  }
};

// [1,2,3].myEach(function(ele){
//   console.log(ele);
// });

const cb = function (ele) {
  return ele * 2;
};

// [2, 4, 6].myEach(cb);

// myMap

// Array.prototype.myMap = function (callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i]));
//   }
//   return result;
// };

Array.prototype.myMap = function(callback) {
  let result = [];
  let cb = function(el){
    // we can use the "callback" function, even though we've enver explicitly defined "callback" inside this inner function
    result.push(callback(el));
  }

  this.myEach(cb); 

  return result; 
};
// console.log([2, 4, 6].myMap(cb));


// Array.prototype.myReduce = function(callback, initialValue){
//   let i = 1;
//   let acc = this[0]
//   if (initialValue !== undefined){
//     acc = initialValue
//     i=0
//   }


// } 

Array.prototype.myReduce = function (callback, initialValue) {

  let acc = this[0];
  let arr = this.slice(1, this.length);
  if (initialValue !== undefined) {
    acc = initialValue;
    arr = this;
  }

  arr.myEach(function(el){
    acc = callback(acc, el);
  });
  return acc;
};

const cb2 = function(num1, num2){
  return num1 + num2;
}

const cb3 = function(acc, el){
  return acc * el
}

// console.log([1,2,3].myReduce(cb3, 100));