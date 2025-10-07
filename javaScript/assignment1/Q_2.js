var unit = 90;
if(unit>=0){
if (unit <= 100){
    var rs = unit * 5 ;
    console.log("Totle bill is",rs);
    
}
else if (unit > 100 && unit <=300){

    var rs = 500 + ((unit-100) * 7) ;
    console.log("Totle bill is",rs );
    
}
else {

    var rs = 500 + 1400 + ((unit-200) * 10) ;
    console.log("Totle bill is",rs);
    
}
}
else{
    console.log("Invalid unit");
    
}