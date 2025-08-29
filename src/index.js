const main = document.querySelector("main");

const newTodoItemButton = document.createElement("button");
newTodoItemButton.textContent = "New Todo";
main.appendChild(newTodoItemButton);

const newTodoItemDialog = document.createElement("dialog");
newTodoItemDialog.innerHTML =  `
  <h2>Todo Details</h2>
  <form>
    <label for="title">Title: <input type="text" name="title" id="title"></label>
    <label for="description">Description: <input type="text" name="description" id="description"></label>
    <label for="dueDate">Due Date: <input type="date" name="dueDate" id="dueDate"></label>
    <label for="priority">Priority: <input type="number" name="priority" id="priority"></label>
    <label for="list">List: <input type="text" name="list" id="list"></label>
    <button id="submit-todo-item">Submit</button>
    <button id="close-dialog">Close</button>
  </form>
  `;
main.appendChild(newTodoItemDialog);
newTodoItemButton.addEventListener("click", function() {
  newTodoItemDialog.show();
})

let toDoLists;
if(localStorage.getItem("toDoLists")) {
  toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
  console.log("toDoLists found in localStorage");
  console.log(toDoLists);
}
else {
  toDoLists = [
                {
                  name: "default",
                  items: [],
                }
              ];
  localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  console.log("toDoLists created and stored in localStorage");
  console.log(JSON.parse(localStorage.getItem("toDoLists")));
}
console.log(toDoLists);

const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const list = document.getElementById("list");
const btnSubmitTodoItem = document.getElementById("submit-todo-item");
const btnCloseNewTodoItemDialog = document.getElementById("close-dialog");
btnSubmitTodoItem.addEventListener("click", function(e) {
  e.preventDefault();
  const titleValue = title.value;
  const descriptionValue = description.value;
  const dueDateValue = dueDate.value;
  const priorityValue = priority.value;
  const listValue = list.value;
  addTodoItem(titleValue, descriptionValue, dueDateValue, priorityValue, listValue);
  newTodoItemDialog.close();
  updateDOM();
});
btnCloseNewTodoItemDialog.addEventListener("click", function(e) {
  e.preventDefault();
  newTodoItemDialog.close();
});

function addTodoItem(title, description, dueDate, priority, list) {
  const newTodoItem = new TodoItem(title, description, dueDate, priority);
  let listName = list.toLowerCase();
  console.log(newTodoItem);
  console.log(listName);
  let listFound = toDoLists.find(list => list.name === listName);
  console.log(listFound);
  if (listFound) {
    listFound.items.push(newTodoItem);
  }
  else {
    toDoLists.push({name: listName, items: [newTodoItem]});
  }
  localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  console.log(JSON.parse(localStorage.getItem("toDoLists")));
};

class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
};

const listDisplay = document.createElement("section");
main.appendChild(listDisplay);
function updateDOM() {
    toDoLists[0].items.map(item => {
      listDisplay.innerHTML += `
        <div>
          <p>Title: ${item.title}</p>
          <p>Description: ${item.description}</p>
          <p>Due Date: ${item.dueDate}</p>
          <p>Priority: ${item.priority}</p>
        </div>
      `;
    });
}
updateDOM();
