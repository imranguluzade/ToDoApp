const addBtn = document.querySelector(".btn-add");
const input = document.querySelector("#task");
const form = document.querySelector("form");
const UL = document.querySelector("#myTasks");
const trashImg = document.createElement("img");
trashImg.src = "../assets/trash-can-solid.svg";
const clearAllBtn = document.querySelector(".clear-all");

function addTask(e) {
  e.preventDefault();
  if (input.value === "") {
    alert("Please enter valid value for creating task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    UL.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = trashImg.outerHTML;
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

form.addEventListener("submit", addTask);

UL.addEventListener("click", (el) => {
  if (el.target.tagName === "LI") {
    el.target.classList.toggle("checked");
    saveData();
  } else if (el.target.tagName === "IMG") {
    el.target.parentElement.parentElement.remove();
    saveData();
  }
});

clearAllBtn.addEventListener("click", clearAllTasks);

function clearAllTasks() {
  UL.innerHTML = "";
  saveData();
}

function saveData() {
  localStorage.setItem("tasks", UL.innerHTML);
}

function showData() {
  UL.innerHTML = localStorage.getItem("tasks");
}

showData();
