const reverseString = function(str) {

  let splitString = function(str) {
    let result = str.split("");
    return result;
  }
  
    let reverseArray = function(str) {
    let result = str.reverse();
    return result;
  }
    let reversedArray = reverseArray(splitString(str));
    let endResult = reversedArray.join("");
    return endResult;
};

// Do not edit below this line
module.exports = reverseString;
