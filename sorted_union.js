function unite(arr1, arr2, arr3) {
 var finalArr = arr1;
 
 
for (i=0; i<arguments.length; i++) {
	for (h=0; h<arguments[i].length; h++)
		if (finalArr.indexOf(arguments[i][h])<0) {
			finalArr.push(arguments[i][h]);
		}
	}
 
 
return finalArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
