function sumPrimes(number) {
  if (number < 2) return 0;
  var result = [2];
 
  for (var i = 3; i <= number; i += 2) {
    if (isPrime(i)) result.push(i);
  }
 
  return result.reduce(function(a, b) {
    return a + b;
  });
 
  function isPrime(number) {
    if (number < 2) return false;
    for (var i = 2; i <= number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}
sumPrimes(10);
