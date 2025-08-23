const main = document.querySelector("main");

const newTodoItemButton = document.createElement("button");
newTodoItemButton.textContent = "New Todo";

document.addEventListener("DOMContentLoaded", function() {
 main.appendChild(newTodoItemButton);
});

const newTodoItemDialog = document.createElement("dialog");
newTodoItemDialog.innerHTML =  `
  <h2>Todo Details</h2>
  <form>
    <label for="title">Title: <input type="text" name="title" id="title"></label>
    <label for="description">Description: <input type="text" name="description id="description></label>
    <label for="dueDate">Due Date: <input type="date" name="dueDate" id="dueDate"></label>
    <label for="priority">Priority: <input type="number" name="priority" id="priority"></label>
    <button id="submit-todo-item">Submit</button>
    <button id="close-dialog">Close</button>
  </form>
  `;

document.addEventListener("DOMContentLoaded", function() {
  main.appendChild(newTodoItemDialog);
});

newTodoItemButton.addEventListener("click", function() {
  newTodoItemDialog.show();
})
