module.exports = function check(str, bracketsConfig) {
  let map = new Map();
  for (let i = 0; i <bracketsConfig.length; i++){
    map.set(bracketsConfig[i][0], 0);
    map.set(bracketsConfig[i][1], 0);
  }

  var splitted = str.split('');
  for (let j = 0; j <splitted.length; j++){
  if (map.has(splitted[j])){
    map.set(splitted[j],   map.get(splitted[j]) +1 );
  }
  }
  for (let s = 0; s <bracketsConfig.length; s++){
    if (map.get(bracketsConfig[s][0]) != map.get(bracketsConfig[s][1]))
      {
      console.log('before false');
       return false;}
  }
  console.log('before true');
  return true;
}
