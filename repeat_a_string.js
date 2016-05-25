function repeat(str, num) {
 if(num === 0) {
      return str;
    } else if(num > 0) {
      var newStr = "";
      for(var i = 0; i < num; i++){
        newStr += str;
      }
      return newStr;
    } else {
      return "";
    }
}

repeat("abc", 3);
