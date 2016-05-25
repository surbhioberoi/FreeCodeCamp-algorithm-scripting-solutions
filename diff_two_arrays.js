function nonDuplicates(newArr) {
    newArr.sort();
    
    
    var result = [];
    for (var i = 0; i < newArr.length; i++) {
      var isDuplicate = false;
      for (var j = i + 1; j < newArr.length; j++) {
        if (newArr[i] === newArr[j]) {
          isDuplicate = true;
          newArr.splice(i, 1);
          break;
        }
      }
      if (isDuplicate === false) {
        result.push(newArr[i]);
      }
    }
    return result;
    
  }
  
 var newArr = arr1.concat(arr2);
  return nonDuplicates(newArr);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]);

//[1, 2, 3, 5, 1, 2, 3, 4, 5]
//[1, 1, 1, 2, 2, 3, 3, 4, 5, 5]
