var number = [1,2,3,4,5,6,7,8,9,10];
var length = number.length;
var sum = 0;
var min = number[0];
for(var i = 0;i<length;i++){
   if(min > number[i]){
       min = number[i];
   }
    
}

console.log(min);

