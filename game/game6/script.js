//DOM elements|
var todoList = []
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button")
var todoInput = document.getElementById("todo-input")
var deleteAllButton = document.getElementById("delete-all")
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected")

var text;

function updateList(){
    comdoList = todoList.filter((data)=>{
        if(data.complete == true) return data;
    });
    remList = todoList.filter((data)=>{
        if(data.complete == false) return data;
    });

    console.log("complet",comdoList)
    console.log("uncomplet",remList)



}


function add (){

   text = todoInput.value;
   console.log(text)
    if(text == ""){
        alert("no content is added, please add the content");
        return;
    }

    todoList.push(
        {
            content : text,
            id : Date.now(),
            complete : false
        }
    )


    todoList.forEach((value)=>{
        console.log(value);
    });

    updateList();



}









//event listners for add and delete
addButton.addEventListener("click", add)
// deleteAllButton.addEventListener("click", deleteAll)
// deleteSButton.addEventListener("click", deletes)





























































