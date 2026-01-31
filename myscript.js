let tasks = [];


function renderTasks() {
const list = document.getElementById('taskList');
list.innerHTML = '';


tasks.forEach((task, index) => {
const li = document.createElement('li');
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = task.completed;
checkbox.onchange = () => toggleComplete(index);


const text = document.createElement('span');
text.textContent = task.text;
text.className = 'task-text' + (task.completed ? ' completed' : '');


text.onclick = () => toggleComplete(index);


const actions = document.createElement('div');
actions.className = 'actions';


const editBtn = document.createElement('button');
editBtn.textContent = 'Edit';
editBtn.onclick = () => editTask(index);


const delBtn = document.createElement('button');
delBtn.textContent = 'X';
delBtn.onclick = () => deleteTask(index);


actions.appendChild(editBtn);
actions.appendChild(delBtn);

li.appendChild(checkbox);
li.appendChild(text);
li.appendChild(actions);
list.appendChild(li);
});
}


function addTask() {
const input = document.getElementById('taskInput');
if (input.value.trim() === '') return alert('Please enter a task');
tasks.push({ text: input.value, completed: false });
input.value = '';
renderTasks();
}


function toggleComplete(index) {
tasks[index].completed = !tasks[index].completed;
renderTasks();
}


function editTask(index) {
const newText = prompt('Edit task:', tasks[index].text);
if (newText !== null && newText.trim() !== '') {
tasks[index].text = newText.trim();
renderTasks();
}
}


function deleteTask(index) {
tasks.splice(index, 1);
renderTasks();
}