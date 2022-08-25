const removeFromArray = function(arr, ...args) {
    
    // filter items not in args array
    let result =  arr.filter(item => {
        if (!args.includes(item)) {
          return item;
        }
      })
    
    // return result
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
