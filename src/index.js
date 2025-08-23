const main = document.querySelector("main");

const newTodoItemButton = document.createElement("button");
newTodoItemButton.textContent = "New Todo";

document.addEventListener("DOMContentLoaded", function() {
 main.appendChild(newTodoItemButton);
});
