const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector(".todo-list");

let toDo = [];

function saveToDo() {
  localStorage.setItem("todo", JSON.stringify(toDo));
}

function handleToDoDelete(event) {
  const li = event.target.parentElement;
  li.remove();
  toDo = toDo.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  console.log(btn);
  span.innerText = newToDo.text;
  btn.innerText = "❌";
  btn.addEventListener("click", handleToDoDelete);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.append(li);
  console.log(toDoList);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDo.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem("todo");

if (savedToDo) {
  const parsedToDo = JSON.parse(savedToDo);
  toDo = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
