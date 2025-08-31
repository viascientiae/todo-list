const STORAGE_KEY = "toDoLists";

export function loadLists() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) return JSON.parse(data);
  const initial = [{ name: "default", items: [] }];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
 }

 export function saveLists(toDoLists) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDoLists));
 }
 