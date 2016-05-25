function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isFalsy (value) {
    return (new Boolean(value)).valueOf();
  }
  
  return arr.filter(isFalsy);
}

bouncer([7, "ate", "", false, 9]);