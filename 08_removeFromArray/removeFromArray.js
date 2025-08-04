const removeFromArray = function (arr, ...args) {
  return arr.filter((item) => {
    for(const arg of args){
        if(arg === item){
            return false
        }
    }
    return true;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
