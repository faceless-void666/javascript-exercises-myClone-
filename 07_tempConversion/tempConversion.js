const convertToCelsius = function(temp) {
  let converted = (temp - 32) * (5/9);
  let result = parseFloat(converted.toFixed(1));
  return result;  
};

const convertToFahrenheit = function(temp) {
  let converted = (temp * (9/5) + 32);
  let result = parseFloat(converted.toFixed(1)); 
  return result; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
