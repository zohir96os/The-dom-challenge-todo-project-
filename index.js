//get elements
let inputField = document.querySelector(".todo-list");
let inputText = document.querySelector(".taskInput");
let add = document.querySelector(".add");

let addNewTask = (e) => {
  //prevent the default event
  e.preventDefault();
  if (inputText.value !== "" && inputText.value.trim() !== "") {
    //create new field
    let newInputField = document.createElement("div");
    //add class to the created field
    newInputField.classList.add("input-area");
    //creat button delete and edit
    let edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.classList.add("edit");
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.classList.add("remove");
    //appden btns to the inpute
    newInputField.append(edit, remove);
    //create new input element
    let taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.disabled = true;
    taskInput.value = inputText.value;
    //append the created inpute to the div
    newInputField.prepend(taskInput);
    //add the taskInput to the dom
    inputField.prepend(newInputField);
    //set input field empty
    inputText.value = "";
    //handle remove and edit buttons
    remove.addEventListener("click", removeTask);
    edit.addEventListener("click", editTask);
    // Save the task to local storage
    saveTaskToLocalStorage(inputText.value);
  }
};

let removeTask = (e) => {
  // Remove the task from the DOM
  e.target.parentElement.remove();
};

// const saveTaskToLocalStorage = localStorage.setItem("myCat", "Tom");
// const getTaskFromLocalStorage = localStorage.getItem("myCat");
// const removeTaskFromLocalStorage = localStorage.removeItem("myCat");

let editTask = (e) => {
  let input = e.target.parentNode.firstChild;
  input.disabled = false;
  inputText.value = e.target.parentNode.firstChild.value;
  e.target.parentNode.remove();
};

add.addEventListener("click", addNewTask);
inputText.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNewTask(event);
  }
});
