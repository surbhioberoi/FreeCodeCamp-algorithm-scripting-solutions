function permAlone(str) {

  var regex = /(.)\1+/g;

  var arr = str.split('');
  var permutations = [];
  var tmp;

  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  function generate(int) {
    if (int === 1) {
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  return filtered.length;
}
permAlone('aab');
