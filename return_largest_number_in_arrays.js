function largestOfFour(arr) {
var largestInArray = function (array) {
    var largest = -999999999;
    for (var i=0; i<array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }

    return largest;
  };
  
return arr.map(largestInArray);
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
