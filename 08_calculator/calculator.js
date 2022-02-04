const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function(num) {
	return num.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
	return (array.length)
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function(base, powe) {
	// if (powe === 0) return 1;
  
  // let a = 0;
  // for (let i = 0; i <= powe; i++) {
  //   a += base * base;
  // }
  // return a;
  return Math.pow(base, powe);
};

const factorial = function(num) {
	if (num === 0) return 1;
  
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
  // return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
