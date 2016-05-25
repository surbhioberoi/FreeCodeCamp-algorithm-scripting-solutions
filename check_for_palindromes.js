function palindrome(str) {
  var newStr = str.toLowerCase();
  var result = '';
  var regex = /^[a-z0-9]+$/;
  
  for (var i=0; i < newStr.length; i++) {
    if (regex.test(newStr[i])) {
      result += newStr[i];
    }
  }
    if (result.split('').reverse().join('') === result) {
      return true;
    }
    
    return false;
    
  }
  
  

  
  

palindrome("race car");
