//DOM elements
var todoList = [];
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected");


function updateList(){
    comdoList = todoList.filter((data) =>{
        if(data.complete == true) return data.complete;
    });
    remList.filter((data) =>{
        if(data.complete == false) return data.complete;
    });
    console.log("The task is completed: "+comdoList);
    console.log("All task is remaining"+remList);
    document.querySelector('#r-count').textContent = todoList.length;
    document.querySelector('#c-count').textContent = todoList.length;
}


function appendTask(){
    allTodos.innerHTML = "";


    todoList.forEach((element)=>{
        var x = `<li id=${element.id} class = "todo-item">
        <p id= "task"> ${element.complete ? `<strike> ${element.content}</strike>` : element.content} </p>
        <div class = "todo-actions">
        <button class = "complete btn btn-success">
        <i class= "ci bx bx-cleck bx-sm"></i>
        </button> 
        <button class = "delete btn btn-error">
        <i class= "di bx bx-trash bx-sm"></i>
        </button> 
        </div>
        </li>`

        allTodos.innerHTML += x;
    })



}



function addTask(){
    // take teh content from the input box..
    var text = todoInput.value;
     if(text == ""){
        alert("Please provide a valid input");
        return;
    }

    
    console.log(text);
    todoList.push({
        content:text,
        id: Date.now().toString(),
        complete : false
    });
    todoList.forEach((value)=>{
        console.log(value);
    });
    todoInput.value = "";
   updateList(); //entire 2 remaining array -> completion and remaining 





   appendTask(todoList);



}

todoInput.addEventListener("keypress",(event)=>{
    if(event.key === 'Enter'){
        addTask();
    }
})


function deleteAll(){
    todoList = [];
    updateList();
    appendTask(todoList);
}

function deleteS(){
    todoList = todoList.filter((data)=>{
        if(data.complete === "false"){
            return data;
        }

    })
    console.log(todoList);
    updateList();
    appendTask(todoList);

}

function deleteSpecific(event){
    var id = event.target.parentElement.parentElement.getAttribute("id");
    console.log(id);
}











//event listners for add and delete
addButton.addEventListener("click", addTask);
deleteAllButton.addEventListener("click", deleteAll);
deleteSButton.addEventListener("clicg", deleteS);





document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete") || event.target.classList.contains("di")){
        deleteSpecific(event);
    }
})