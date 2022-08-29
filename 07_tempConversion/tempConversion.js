const ftoc = function(fahrenheit) {  
  // °C = [(°F-32)×5]/9
  let celsius = ((fahrenheit -32) * 5) / 9;  
  celsius = parseFloat(celsius.toFixed(1));

  //return temp rounded to one decimal place
  return celsius;
};

const ctof = function(celsius) {
  // °F=(°C × 9/5) + 32
  let fahrenheit = (celsius * 1.8) + 32;   
  fahrenheit = parseFloat(fahrenheit.toFixed(1));
  //return temp rounded to one decimal place
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
