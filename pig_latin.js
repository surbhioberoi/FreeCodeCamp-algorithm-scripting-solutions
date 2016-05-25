function translate(str) {
  var i=0;
  
  for (;i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      break;
    }
  }
  
  var toAdd;
  if (i === 0) {
    toAdd = 'way';
  } else {
    toAdd = 'ay';
  }
  
  var consonantCluster = str.substring(0,i);
  var remainingStr = str.substring(i, str.length);
  var result = remainingStr + consonantCluster + toAdd;
  
  
  return result;
}

translate("consonant");
