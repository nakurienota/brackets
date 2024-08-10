module.exports = function check(str, bracketsConfig) {
  var queue = [];

  var splitted = str.split('');
  for (let j = 0; j < splitted.length; j++) {
    for (let s = 0; s < bracketsConfig.length; s++) {
      if (splitted[j] == bracketsConfig[s][0]) queue.push(splitted[j]);
      if (splitted[j] == bracketsConfig[s][1]) {
        if (queue.pop() != bracketsConfig[s][0]) 
          return false;
      }
    }
  }
  
  return queue.length == 0;
};

