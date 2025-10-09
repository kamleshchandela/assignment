var number = [1,2,3,4,5,6,7,8,9,10];
var length = number.length;
var even = 0;
var odd = 0;

for(var i = 0;i<length;i++){
   if(number[i]%2===0){
       even++;
   }
   else{
       odd++;
   }
    
}

console.log("Even no. :",even);
console.log("Odd no. :",odd);

