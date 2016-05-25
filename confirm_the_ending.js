function end(str, target) {
  if (str.substr(-target.length) == target) {
    return true;
  } else {
    return false;
  }
}
  // "Never give up and good luck will find you."
  // -- Falcor



end("Bastian", "n");
