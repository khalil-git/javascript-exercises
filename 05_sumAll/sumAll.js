const sumAll = function(from, to) {

    // retuen ERROR incase any argument is negateive or not a number
    if((from < 0 || to < 0) || (isNaN(from) || isNaN(to)))
        return "ERROR"

    // ensure arguments are sorted   
    const arr = [...arguments].sort( (a, b)=> {return a-b;} );    
    // sum variable
    let sum = 0; 
    // sum all numbers starting from argument[0] to arguments[1]  
    for(let i=arr[0]; i<=arr[1]; i++){
       sum+=i;
    }   
    
    // return the sum
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
