var number = [1,0,3,0,5,-6,7,8,9,-10];
var length = number.length;
var pos = 0;
var neg = 0;
var zero = 0;

for(var i = 0;i<length;i++){
  if(number[i] > 0){
      pos++;
  }
  else if (number[i] < 0){
      neg++;
  }
  else{
      zero++;
  }
}

console.log("positive :",pos);
console.log("negative :",neg);
console.log("zero :",zero);

