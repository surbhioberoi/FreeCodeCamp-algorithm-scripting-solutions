function sumAll(arr) {
 var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  var result = 0 ;
  
  for (var i = start; i <= end; i++) {
    result += i;
    }
  return result;
 
}

sumAll([1, 4]);
