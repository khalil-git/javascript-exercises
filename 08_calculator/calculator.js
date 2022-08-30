const add = function(num1 , num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array_num) {
  let initialValue = 0;
	return array_num.reduce( (previousValue, currentValue)=>{
    return previousValue + currentValue
  }, initialValue) 
};


const multiply = function(array_num) {
  // don't forget initial value 1 with multiplying
  const initialValue = 1;
  return array_num.reduce( (previousValue, currentValue)=>{
    return previousValue * currentValue
  }, initialValue) 
};

const power = function(base, exponent) {
	if(exponent === 0){
 		 return 1;
  }
	let counter = exponent
  let result = 1; 
  while(counter > 0){
  	result *= base;   
    counter--;
  }
  return result
};


const factorial = function(num) {
	//!n = n * !(n-1)
  if(num == 0){
 		 return 1;
  }else if(num < 0){
  	return -1
  }else{    
  	return num * factorial(num - 1);
  }
  
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
