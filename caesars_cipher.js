function rot13(str) { // LBH QVQ VG!
  var result = "";
  for (var i=0; i<str.length; i++) {
    if (str.charCodeAt(i) <= 'Z'.charCodeAt(0) && str.charCodeAt(i) >= 'A'.charCodeAt(0)) {
     var value = (str.charCodeAt(i) - 'A'.charCodeAt(0) + 13) % 26 + 'A'.charCodeAt(0);
    result += String.fromCharCode(value); 
    }
    else {
      result += str[i];
    }
    
  }
  
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");