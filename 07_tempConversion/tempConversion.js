const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * (5/9);
  let roundedCTemp = Math.round(cTemp * 10) / 10;
  return roundedCTemp;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp * (9/5) + 32;
  let roundedFTemp = Math.round(fTemp * 10) / 10;
  return roundedFTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
