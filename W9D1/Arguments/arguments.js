function sum1(){
  let arr = Array.prototype.slice.call(arguments);
  let sum = 0;
  for(let i = 0; i< arr.length;i++){
    sum += arr[i];
  }
  return sum;
}

// console.log(sum1(1, 2, 3, 4));
// console.log(sum1(1, 2, 3, 4, 5));

function sum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
// console.log(sum2(1, 2, 3, 4));
// console.log(sum2(1, 2, 3, 4, 5));

// Function.prototype.myBind = function(obj) {
//   let arr = Array.prototype.slice.call(arguments,1);
//   let that = this;
//   return function boundfunction(){
//     let targetArguments = Array.prototype.slice.call(arguments);
//     return that.apply(obj,arr.concat(targetArguments));
//   };
// };

Function.prototype.myBind = function (obj,...args) {
  let that = this;
  return function boundfunction(...callargs) {
    return that.apply(obj, args.concat(callargs));
  };
};

// Function.prototype.myBind = function (obj, ...bindArgs) {
//   return (...callArgs) => this.apply(obj, bindArgs.concat(callArgs))
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs){
  let numbers = [];
  function _curriedSum(num){
    numbers.push(num);
    if(numbers.length === numArgs){
      return numbers.reduce((a, b) => a + b, 0);
    }else{
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs){
  let numbers=[];
  let that = this;
  function _currySum(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      that.apply(null, numArgs);
    }else{
     return _currySum;
    }
  }
  return _currySum;
}
const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));