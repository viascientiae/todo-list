export function createNewTodoDialog() {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <h2>Todo Details</h2>
    <form>
      <label for="title">Title: <input type="text" name="title" id="title"></label>
      <label for="description">Description: <input type="text" name="description" id="description"></label>
      <label for="dueDate">Due date: <input type="date" name="dueDate" id="dueDate"></label>
      <label for="priority">Priority: <input type="number" name="priority" id="priority"></label>
      <button id="submit-todo-item">Submit</button>
      <button id="close-dialog">Close</button>
    </form>
  `;
  return dialog;
}

export function updateDOM(todoLists, selectedName, selectToDoList, listDisplay) {
  selectToDoList.innerHTML = "";
    todoLists.forEach(list => {
      const opt = document.createElement("option");
      opt.value = list.name;
      opt.textContent = list.name;
      selectToDoList.appendChild(opt);
  });
  selectToDoList.value = selectedName;
  listDisplay.innerHTML = "";
  const current = todoLists.find(list => list.name === selectedName);
  if (current) {
    current.items.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>Title: ${item.title}</p>
        <p>Description: ${item.description}</p>
        <p>Due Date: ${item.dueDate}</p>
        <p>Priority: ${item.priority}</p>
      `;
    listDisplay.appendChild(div);
    });
  }
}
