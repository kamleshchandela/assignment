var a = 80;
var b = 80;
var c = 80;
var d = 80;
var e = 80;

var sum = a+b+c+d+e;

var pers = sum*100/500;

if(pers >= 90){
    console.log(pers , "Gread A");
}
else if(pers >= 80 && pers <=89){
    console.log(pers , "Gread B");
}
else if(pers >= 70 && pers <=79){
    console.log(pers , "Gread C");
}
else if(pers >= 60 && pers <=69){
    console.log(pers , "Gread D");
}
else if(pers < 90){
    console.log(pers , "Fail");
}








