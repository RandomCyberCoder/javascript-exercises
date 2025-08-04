const repeatString = function (str, num) {
  if (num < 0) return "ERROR";

  let builder = "";
  for (let cnt = 0; cnt < num; cnt++) {
    builder += str;
  }

  return builder;
};

// Do not edit below this line
module.exports = repeatString;
