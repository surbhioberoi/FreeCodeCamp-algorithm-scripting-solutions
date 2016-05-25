function pairwise(arr, arg) {
  var index = [];

  for (var a in arr) {
    var temp = arr[a];

    for (var i = 1; i < arr.length; i++) {
      var temp2 = arr[i];

      
      if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
        index.push(+a, +i);
        break;
      }
    }
  }

  
  if (index.length >= 1) {
    var addAll = function(a, b) {
      return a + b;
    };
return index.reduce(addAll);
  } else
    return 0;
}


pairwise([1,4,2,3,0,5], 7);
