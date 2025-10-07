var tex = 90;
if (tex <= 250000){
    
    console.log("No tax", tex);
    
}
else if (tex > 250000 && tex <=500000){
    var rs = tex - tex*5/100 ;
    console.log("Totle income is",rs );
    console.log("Totle Tex is",tex*5/100 );
    
}
else if (tex > 500000 && tex <=1000000){
    var rs = tex - tex*20/100 ;
    console.log("Totle income is",rs);
    console.log("Totle Tex is",tex*20/100);
    
}
else if (tex > 1000000 ){
    var rs = tex - tex*30/100 ;
    console.log("Totle income is",rs);
    console.log("Totle Tex is",tex*20/100);
    
}