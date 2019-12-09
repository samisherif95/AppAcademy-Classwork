const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    numsLeft--;
    reader.question("Enter #1: ", function (numString) {
      const num = parseInt(numString);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  }

  if (numsLeft === 0) {
    return completionCallback(sum);
  }
} 

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));