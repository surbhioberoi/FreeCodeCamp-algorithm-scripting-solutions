function where(arr, num) {
  function compareNumbers(a, b) {
    return a - b;
  }
  arr.sort(compareNumbers);
  for (var i=0; i<arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

where([40, 60], 50);