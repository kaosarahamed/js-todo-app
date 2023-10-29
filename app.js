// select dom element
const inputElement = document.getElementById('input');
const buttonElement = document.getElementById('button');
const itemsElement = document.querySelector(".to-do-lists");
const btnText = buttonElement.innerText;

// initial Value
let todo = [];
let editId = null;
const getTodo = JSON.parse(localStorage.getItem("name"));
    if(getTodo !== null){
        todo = getTodo
    }
displayTodo()
// functions
function toDoCreate(){  
    event.preventDefault();
    const name = inputElement.value;
    if(editId !== null){
        todo.splice(editId, 1, {name: name})
    }else{
        todo.push({
            name: name
         });
    }
    inputElement.value = "";
    saveTodo();
    buttonElement.innerText = btnText;  
}

function saveTodo(){
    const str = JSON.stringify(todo);
    localStorage.setItem("name", str);
    displayTodo();
}

function displayTodo(){
    let statement = '';
    todo.forEach((element, index) => {statement +=
        `<div class="to-do-list">
        <h2>${element.name}</h2>
        <span>
            <i class="fa-solid fa-pen-to-square" onclick="editTodo(${index})"></i>
            <i class="fa-solid fa-trash" onclick="deletTodo(${index})"></i>
        </span>
    </div>`
    });
    itemsElement.innerHTML = statement;
};


function deletTodo(id){
    todo.splice(id, 1);
    saveTodo()
}

function editTodo(id){
    editId = id;
    buttonElement.innerText = "save";
    inputElement.value = todo[id].name;
};