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
    <button id="submit-todo-item">Submit</button>
    <button id="close-dialog">Close</button>
  </form>
  `;

main.appendChild(newTodoItemDialog);

newTodoItemButton.addEventListener("click", function() {
  newTodoItemDialog.show();
})

const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const btnSubmitTodoItem = document.getElementById("submit-todo-item");
const btnCloseNewTodoItemDialog = document.getElementById("close-dialog");

btnSubmitTodoItem.addEventListener("click", function(e) {
  e.preventDefault();
  const titleValue = title.value;
  const descriptionValue = description.value;
  const dueDateValue = dueDate.value;
  const priorityValue = priority.value;
  addTodoItem(titleValue, descriptionValue, dueDateValue, priorityValue);
});

let defaultTodoList = [];

localStorage.setItem("defaultTodoList", JSON.stringify(defaultTodoList));

function addTodoItem(title, description, dueDate, priority) {
  const newTodoItem = new TodoItem(title, description, dueDate, priority);
  defaultTodoList = JSON.parse(localStorage.getItem("defaultTodoList"));
  defaultTodoList.push(newTodoItem);
  localStorage.setItem("defaultTodoList", JSON.stringify(defaultTodoList));
};

class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
};