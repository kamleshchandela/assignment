console.log("koookokoko");



const express = require("express");

const app = express();



const arr = [
{
"studentName": "ABDUL HAQUE",
"University": "SUxCG 714",
"UniversityUID": "108444"
},
{
"studentName": "ADITYA KUMAR",
"University": "SUxCG 702",
"UniversityUID": "108716",
},
{
"studentName": "AMAN KUMAR",
"University": "SUxCG 702",
"UniversityUID":"108500"
},
{
"studentName": "AMRIT RAJ",
"University": "SUxCG 702",
"UniversityUID": "108587"
},

]

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/users", (req, res) => {
  
  res.status(200).json(users);
});


app.get("/:gr_no", (req, res) => {
  const userId = req.params.gr_no;
  
  const user = arr.find(u => u.studentName === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" }); 
  }

  res.status(200).json(user);
});



app.use(express.json());


app.post("/users", (req, res) => {
  console.log(req.body)
  req.body.map((e , i)=>{
    var newUser = {
    id: users.length + 1,
    name: req.body[i].name,
    role: req.body[i].role
  };
  users.push(newUser);
  })
  // const newUser = {
  //   id: users.length + 1,
  //   name: req.body.name,
  //   role: req.body.role
  // };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
});










app.listen(3000, () => {
  console.log("Server started on port 3000");
});

















