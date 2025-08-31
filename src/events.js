import TodoItem from "./ToDoItem";
import { saveLists } from "./storage";

export function setupEventListeners(
    main,
    toDoLists,
    newTodoItemDialog,
    selectTodoList,
    listDisplay,
    updateDOM
) {
    document.getElementById("submit-todo-item").addEventListener("click", function(e) {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("dueDate").value;
      const priority = document.getElementById("priority").value;
      const list = document.getElementById("list").value.toLowerCase();

      const newTodo = new TodoItem(title, description, dueDate, priority);
      let listFound = toDoLists.find(l => l.name === list);
      if (listFound) listFound.items.push(newTodo);
      else toDoLists.push({ name: list, items: [newTodo] });
      saveLists(toDoLists);
      newTodoItemDialog.close();
      updateDOM(toDoLists, list, selectTodoList, listDisplay);
    });
  
    document.getElementById("close-dialog").addEventListener("click", function(e) {
        e.preventDefault();
        newTodoItemDialog.close();
    });

    selectTodoList.addEventListener("change", function(e) {
        updateDOM(toDoLists, e.target.value, selectTodoList, listDisplay);
    });
};
