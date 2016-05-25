function mutation(arr) {
  var first = arr[0].toLowerCase().split('');
  var second = arr[1].toLowerCase().split('');
  
  for (var i=0; i< second.length; i++) {
    var contains = false;
    for (var j=0; j<first.length; j++) {
      if (second[i] === first[j]) {
        contains = true;
      }
    }
    if (contains === false) {
      return false;
    } 
  }
  return true;
}

mutation(["hello", "hey"]);
