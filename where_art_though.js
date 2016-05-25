function where(collection, source) {
  var arr = [];
  var properties = Object.keys(source);
  
  for (var i = 0; i < collection.length; i++) {
	var isValid = true;
  
    for (var j=0; j<properties.length; j++) {
      if (!(collection[i].hasOwnProperty(properties[j]) && 	collection[i][properties[j]] === source[properties[j]])) {
            isValid = false;
         }
    }

     if (isValid) {
      arr.push(collection[i]);
     }
  }
  return arr;
}



where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
