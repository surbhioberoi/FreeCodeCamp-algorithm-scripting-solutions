function fearNotLetter(str) {
  var missing = undefined;
      prev = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== prev + 1) {
      missing = String.fromCharCode(str.charCodeAt(i) - 1);
      return missing;
    } else {
      prev++;
    }
  }
  return missing;
}


fearNotLetter("abce");
