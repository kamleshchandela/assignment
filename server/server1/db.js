// npm install mongoose se mongoose ko downlode kiya 


const mongoose = require("mongoose");
const mongoURL = "mongidb://localhost:27017/hotels" ;
mongoose.connect(mongoURL , {
    useNewUrlParser : true ,
    useUnifiedTopology : true 
})

const db = mongoose.connection ;

db.on("connected" , ()=>{
    console.log("connected to MongoGB") ;
})
db.on("error" , ()=>{
    console.log("error to MongoGB") ;
})
db.on("disconnected" , ()=>{
    console.log("disconnected to MongoGB") ;
})

module.exports = db ;




