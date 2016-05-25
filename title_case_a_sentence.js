function titleCase(str) {
  var fn = function (a) {
    a = a.toLowerCase();
    return a[0].toUpperCase() + a.slice(1, a.length);
  };
  
 return str.split(' ').map(fn).join(' ');
 
  
 
  
}

titleCase("I'm a little tea pot");
