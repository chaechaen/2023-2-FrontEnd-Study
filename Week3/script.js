function addTodoList() {
    var todoText = document.getElementById("inputTodo").value;

    if (todoText === "") {
      return;
    }

    var newItem = createListItem(todoText);
    var todoList = document.getElementById("addTodo");
    todoList.appendChild(newItem);

    document.getElementById("inputTodo").value = "";
}

function createListItem(text) {
    var newItem = document.createElement("li");
    newItem.textContent = text;
  
    var deleteButton = document.createElement("span");
    deleteButton.textContent = "x";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function () {
      newItem.remove();
    };

    newItem.appendChild(deleteButton);

    return newItem;
}

function moveItem(event){
    var clickedItem = event.target;

    if (clickedItem.tagName === "LI") {
        var listItem = clickedItem;
        var targetList = listItem.parentNode.id === "addTodo" ? "addDone" : "addTodo";
    
        document.getElementById(targetList).appendChild(listItem);
      }
}