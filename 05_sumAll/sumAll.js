const sumAll = function(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let range = [];
  let sum = 0;
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (isNaN(num1) || isNaN(num2)) {
    return "ERROR";
  }
   else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
   }
    for (let i = min; i <= max; i++) {
      range.push(i);
    }

    for (let j = 0; j < range.length; j++) {
      sum += range[0] + j;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
