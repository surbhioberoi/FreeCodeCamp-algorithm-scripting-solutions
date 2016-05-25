function findLongestWord(str) {
  var fn = function (x) {
    return x.length;
 };
  
 var arr = str.split(' ').map(fn);
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (longest < arr[i]) {
       longest = arr[i];
    }
  }
  return longest;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
