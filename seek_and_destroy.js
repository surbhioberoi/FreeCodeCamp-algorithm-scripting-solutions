function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments).slice(1);
  
  function unwanted(val) {
    for (i=0; i<args.length; i++) {
      if (val === args[i]) {
              return false;
      }
    }
    return true;
  }
  
  
  return arr.filter(unwanted);
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
