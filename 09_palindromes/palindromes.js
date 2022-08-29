const palindromes = function (string) {
    //patterns
    let pattern = /[a-zA-Z]/ig;
    // targetStr arr
    const targetStr = string.toLowerCase().match(pattern);   
    // string length
    let strLength = targetStr.length - 1;
    // Half string length rounded to floor  
    let halfStringLength =  Math.floor(targetStr.length / 2);
    // loop through only half of the string    
    for (let i = 0; i < halfStringLength; i++)
      // every tern check palindromes through rigth part and left part for the given string
      if (targetStr[i] !== targetStr[strLength - i]) {
        // no palindrom        
        return false;
      }
    // increase by 1  
    strLength--;   
    // whole string is palindronm 
    return true;
  };
  
  
// Do not edit below this line
module.exports = palindromes;
