import TodoItem from "./ToDoItem";
import { loadLists, saveLists } from "./storage";
import { createNewTodoDialog, updateDOM } from "./dom";

const main  = document.querySelector("main");

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
