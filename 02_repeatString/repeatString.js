const repeatString = function(string, num) {
  let i = 0;
  if (num === 0) {
    return "";
  } 
  else if (num < 0) {
    return "ERROR";
  }
  else {
    while (i <= num) {
    let result = string.repeat(num); 
    return result;
    } 
  }
};

// Do not edit below this line
module.exports = repeatString;