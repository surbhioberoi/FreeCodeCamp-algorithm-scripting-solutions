function every(collection, pre) {
  var counter = 0;

  for (var c in collection) {
    if (collection[c][pre]) {
      counter++;
    }
  }

  if (counter == collection.length) {
    return true;
  } else
    return false;
}





every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
