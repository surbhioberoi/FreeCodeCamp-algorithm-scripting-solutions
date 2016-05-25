function chunk(arr, size) {
  var result = [];
  for (var start=0; start < arr.length; start += size) {
    result.push(arr.slice(start, start + size));
  }
  
  return result;
}

chunk(["a", "b", "c", "d"], 3);
