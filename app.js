function addTask() {

  var taskName = document.getElementById("taskName").value;
  var subject = document.getElementById("subject").value;
  var deadline = document.getElementById("deadline").value;

  var taskList = document.getElementById("taskList");

  var li = document.createElement("li");

  li.innerHTML =
    "<strong>" + taskName + "</strong> - " +
    subject + " - " +
    deadline +
    " <button onclick='completeTask(this)'>Complete</button>" +
    " <button onclick='deleteTask(this)'>Delete</button>";

  taskList.appendChild(li);

  
  document.getElementById("taskName").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("deadline").value = "";
}

function deleteTask(button) {
  var task = button.parentElement;
  task.remove();
}

function completeTask(button) {
  var task = button.parentElement;

  if (task.classList.contains("completed")) {
    task.classList.remove("completed");
  } else {
    task.classList.add("completed");
    button.innerText = "Undo";
    message.innerText = "Well done! Task completed";
  }
}
