import { loadLists } from "./storage";
import { createNewTodoDialog, updateDOM } from "./dom";
import { setupEventListeners } from "./events";

const main  = document.querySelector("main");
const toDoLists = loadLists();

const newTodoItemButton = document.createElement("button");
newTodoItemButton.textContent = "New Todo";
main.appendChild(newTodoItemButton);

const newTodoItemDialog = createNewTodoDialog();
main.appendChild(newTodoItemDialog);

newTodoItemButton.addEventListener("click", () => newTodoItemDialog.show());

const selectToDoListContainer = document.createElement("section");
selectToDoListContainer.innerHTML = `
  <label for="selectToDoList">Choose a ToDo List to Display</label>
  <select name="selectTodoList" id="select-todo-list"></select>  
`;
main.appendChild(selectToDoListContainer);

const selectToDoList = document.getElementById("select-todo-list");
const listDisplay = document.createElement("section");
main.appendChild(listDisplay);

updateDOM(toDoLists, "default", selectToDoList, listDisplay);
setupEventListeners(main, toDoLists, newTodoItemDialog, selectToDoList, listDisplay, updateDOM);
