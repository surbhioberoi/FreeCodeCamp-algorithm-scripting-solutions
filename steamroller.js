function steamroller(nestedArray) {
  var flatArray=[];
  
  for (var i = 0; i < nestedArray.length; i++) {
    if (!Array.isArray(nestedArray[i])) {
      flatArray.push(nestedArray[i]);
    } else {
      flatten(nestedArray[i]);
    }
  }
 
  function flatten(arr) {
    for (var j = 0; j < arr.length; j++) {
      if (!Array.isArray(arr[j])) {
        flatArray.push(arr[j]);
      } else {
        flatten(arr[j]);
      }
    }
  }
    
  return flatArray;
}

steamroller([1, [2], [3, [[4]]]]);
