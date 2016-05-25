function convert(num) {
  var result = '';
  var decimal = [1, 5, 10, 50, 100, 500, 1000];
  var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  
  function basicRoman(n) {
    var index = 0;
     
    while (n >= decimal[index]) {
      console.log(n, decimal[index]);
      index += 1;
      
    }
    return roman[index-1];
  }
 
  
  while (num > 0) {
    var basic = basicRoman(num);
    result += basic;
    num -= decimal[roman.indexOf(basic)];
    specialCase();
  }
  
  function specialCase() {
    result = result.replace("IIII", "IV");
    result = result.replace("VVVV", "VX");
    result = result.replace("XXXX", "XL");
    result = result.replace("LLLL", "LC");
    result = result.replace("CCCC", "CD");
    result = result.replace("DDDD", "DM");
    
    result = result.replace("VIV", "IX");
    result = result.replace("XVX", "VL");
    result = result.replace("LXL", "XC");
    result = result.replace("CLC", "LD");
    result = result.replace("DCD", "CM");
  }
  
 return result;
}

convert(4);
