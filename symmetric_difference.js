function complement(A, B) {
    return A.filter(function(elem) { return B.indexOf(elem) == -1; });
}

function unique(arr) {
  return arr.filter(function(elem, pos) {
    return arr.indexOf(elem) == pos;
  });
}

function sym(args) {
    var arg = [].slice.call(arguments);
    return arg.map(unique).reduce(function(previous, current) {
        return complement(previous, current).concat(complement(current, previous)); });
}
 
sym([1, 2, 3], [5, 2, 1, 4]);
