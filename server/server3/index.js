console.log("Hello server!");

// Import Express
const express = require("express");  // <-- This was missing
const app = express();

app.use(express.json());

const users = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": { "rate": 4.1, "count": 259 }
  },
  {
    "id": 3,
    "title": "Cotton Jacket",
    "price": 55.99,
    "category": "womens clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": { "rate": 4.7, "count": 500 }
  }
];

console.log(users);

app.get("/all", (req, res) => {
  res.status(200).json(users);
});

app.get("/product/:id", (req, res) => {
    const id = parseInt(req.params.id) ;

    const ans = users.filter((e)=>{return(e.id== id)})


  res.status(200).json(ans);
});


app.get("/category/:type", (req, res) => {
    const type = req.params.type;   // DO NOT parseInt

    const ans = users.filter(e => e.category === type);

    if (ans.length === 0) {
        return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(ans);
});






var newUser = null ;
app.post("/product", (req, res) => {
  console.log(req.body)
  console.log(Array.isArray(req.body))
  if(Array.isArray(req.body)){
        req.body.map((e , i)=>{
            newUser = {
            id: users.length + 1,
            title: req.body[i].title,
            price: req.body[i].price,
            category: req.body[i].category,
            image: req.body[i].image,
            rating: req.body[i].rating
        };
        users.push(newUser);
        })
  }
  else{
        newUser = {
            id: users.length + 1,
            title: req.body.title,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image,
            rating: req.body.rating
        };
        users.push(newUser);
  }
  


  res.status(201).json({
    message: "User created",
    user: newUser
  });
});












// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
