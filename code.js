let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `
      <div class="d-flex align-items-center">
        <input type="checkbox" class="mr-2" onchange="toggleTask(${index})" ${
      task.completed ? "checked" : ""
    }>
        <span>${task.text}</span>
        <button class="btn btn-danger ml-auto" onclick="deleteTask(${index})">Eliminar</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function filterTasks(filter) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    if (
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed)
    ) {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = `
        <div class="d-flex align-items-center">
          <input type="checkbox" class="mr-2" onchange="toggleTask(${index})" ${
        task.completed ? "checked" : ""
      }>
          <span>${task.text}</span>
          <button class="btn btn-danger ml-auto" onclick="deleteTask(${index})">Eliminar</button>
        </div>
      `;
      taskList.appendChild(li);
    }
  });
}

renderTasks();
