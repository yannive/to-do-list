let todos = [];

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const doneClass = todo.done ? 'done' : '';
    li.innerHTML = `
      <span class="${doneClass}">${todo.text}</span>
      <div class="actions">
        ${todo.done 
          ? `<button onclick="undoTodo(${index})">Undo</button>` 
          : `<button onclick="markAsDone(${index})">Done</button>`}
        <button onclick="deleteTodo(${index})">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById('todo-input');
  const value = input.value.trim();
  if (!value) return;

  todos.push({ text: value, done: false });
  input.value = '';
  renderTodos();
}

function markAsDone(index) {
  todos[index].done = true;
  renderTodos();
}

function undoTodo(index) {
  todos[index].done = false;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
