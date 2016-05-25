function truncate(str, num) {
  if(str.length <= num){
return str;
}

if(str.length > num){
if(num > 3){
return str.slice(0, num-3) + "...";
}else{
return str.slice(0, num) + "...";
}
}
}
truncate("A-tisket a-tasket A green and yellow basket", 11);
