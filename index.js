//get elements
let inputField = document.querySelector(".todo-list");
let inputText = document.querySelector(".taskInput");
let add = document.querySelector(".add");

//Create new task function
const creatTaskElement = (taskText) => {
  let taskElement = document.createElement("div");
  taskElement.classList.add("input-area");

  const edit = document.createElement("button");
  edit.innerText = "Edit";
  edit.classList.add("edit");
  const remove = document.createElement("button");
  remove.innerText = "Remove";
  remove.classList.add("remove");

  taskElement.append(edit, remove);

  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.disabled = true;
  taskInput.value = taskText;

  taskElement.prepend(taskInput);

  remove.addEventListener("click", removeTask);
  edit.addEventListener("click", editTask);

  return taskElement;
};

let addNewTask = (e) => {
  e.preventDefault();

  const trimmedInput = inputText.value.trim();
  if (trimmedInput !== "") {
    const newTaskElement = creatTaskElement(trimmedInput);
    inputField.prepend(newTaskElement);
    inputText.value = "";
  }
};
//Remove task function
let removeTask = (e) => {
  // Remove the task from the DOM
  e.target.parentElement.remove();
};
//Edit task function
let editTask = (e) => {
  let input = e.target.parentNode.firstChild;
  input.disabled = false;
  inputText.value = e.target.parentNode.firstChild.value;
  e.target.parentNode.remove();
};

//Handle enter key button
add.addEventListener("click", addNewTask);
inputText.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNewTask(event);
  }
});
