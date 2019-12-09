function range(start,end) {
  if (start === end){
    return [start]
  }
  return [start].concat(range(start+1,end));
}

// console.log(range(1,5))

function sumRec(arr){
  if (arr.length===0){
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1,arr.length))
}
// console.log(sumRec([1,2,3,4,5]))

function exponent(base,exp){
  if (exp === 0){
    return 1
  }
  return base * exponent(base,exp-1)
}

// console.log(exponent(2,3))

function exponent2(base, exp) {
  if (exp === 0) {
    return 1
  }
  if (exp%2===0){
    return base * exponent2(base, exp/2)**2
  }else{
    return base * (exponent2(base, (exp - 1) / 2) ** 2) 
  }
}

// console.log(exponent2(2,3))

function fibonacci(n){
  if (n === 1){
    return [1];
  } 
  if (n === 2){
    return [1,1];
  }
  let temp = fibonacci(n-1);
  return temp.concat([temp[temp.length - 1] + temp[temp.length - 2]]);
  // return temp.push([temp[temp.length - 1] + temp[temp.length - 2]]);

}

// console.log(fibonacci(10))

// function deepDup(arr){
//   let result = [];
//   for(let i = 0; i < arr.length; i++){
//     if (Array.isArray(arr[i])) {
//        deepDup(arr[i]);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

function deepDup(arr) {
  return arr.map(function(el){
    if (Array.isArray(el)) {
      return deepDup(el);
    } else {
      return el;
    }
  })
}

let arr = [[1,2,3],[4,5,6],7];
console.log(deepDup(arr));

