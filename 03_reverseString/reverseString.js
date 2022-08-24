const reverseString = function(string) {
    
    let result = '';
    let splitedStr = string.split('');
    
    let counter = splitedStr.length-1;
    while(counter >= 0){
        result += splitedStr[counter]
        counter--;
    }  

    //return result
    return result;
};

// Do not edit below this line
module.exports = reverseString;
