console.log("server") ;


// app.get("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);


//   const users = [
//   { id: 1, name: "Arjun", role: "student" },
//   { id: 2, name: "Priyesha", role: "mentor" }
// ];

//   app.get("/users", (req, res) => {
//     res.status(200).json(users);
//     });


//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.status(200).json(user);
// });


// ye niche valeko janana he to nodejs ke docs me se padhana
// var fs = require("fs");
// var os = require("os");

// console.log(os.userInfo().username)
// console.log(fs)



// isse file create ho jaegi or usme data uppend ho jaega
// fs.appendFile("kamo.js","kamlesh chandela",()=>{
//     console.log("okok")
// })

var data = [
    {name : "kamesh",
    roll : 1234},
    {name : "Himat",
    roll : 3456},
    {name : "Purnansh",
    roll : 6364},
    {name : "Het",
    roll : 2536},
    {name : "Jonty",
    roll : 9684},
    {name : "Vishv",
    roll : 9267},
    {name : "Jal",
    roll : 8468},
    {name : "Khush",
    roll : 8567},
    {name : "Apela",
    roll : 9567},
    {name : "Vedant",
    roll : 5728},
    {name : "Nishit",
    roll : 3749},

]

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})















