const sumAll = function (start, end) {
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end < 0
  )
    return "ERROR";
  if(start > end){
    let swap = start;
    start = end;
    end = swap;
  }
  let accumulator = 0;
  for (let num = start; num <= end; num++) {
    accumulator += num;
  }
  return accumulator;
};

// Do not edit below this line
module.exports = sumAll;
