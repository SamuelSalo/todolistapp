const todoInput = document.querySelector('.todoinput');
const todoButton = document.querySelector('.todobutton');
const todoList = document.querySelector('.todolist');
const saveButton = document.querySelector('.savebutton');
const loadButton = document.querySelector('.loadbutton');
const pwInput = document.querySelector('.passwordinput');

todoButton.addEventListener('click', addTask);
todoList.addEventListener('click', onTodoItemClicked);
saveButton.addEventListener('click', save);
loadButton.addEventListener('click', load);

function addTask(event)
{
	event.preventDefault();
	const todoContainer = document.createElement("div");
	todoContainer.classList.add("todo");
	
	const todoItem = document.createElement('li');
	todoItem.innerText = todoInput.value;
	todoInput.value = '';
	todoItem.classList.add('todoitem');
	todoContainer.appendChild(todoItem);
	
	const taskButton = document.createElement('button');
	taskButton.innerHTML = '<span class="material-icons-outlined">check_circle</span>';
	taskButton.classList.add("taskbutton");
	todoContainer.appendChild(taskButton);
	
	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = '<span class="material-icons-outlined">delete_outline</span>';
	deleteButton.classList.add("deletebutton");
	todoContainer.appendChild(deleteButton);
	
	todoList.appendChild(todoContainer);
}

function onTodoItemClicked(event)
{
	const item = event.target;
	
	if(item.classList[0] === "deletebutton")
	{
		item.parentElement.remove();
	}
	
	if(item.classList[0] === "taskbutton")
	{
		item.parentElement.classList.toggle("taskcomplete");
	}
}

function save(event)
{
	event.preventDefault();
	
	var tasks = document.getElementsByClassName('todoitem');
	
	for (let i = 0; i < tasks.length; i++)
	{
		sendToSql(tasks[i].innerHTML, tasks[i].parentElement.classList.contains('taskcomplete'));
	}
	
}
function load(event)
{
	event.preventDefault();
	const pw = pwInput.value;
	$("#todolist").load("load.php", {pw});
}

function sendToSql(name, complete)
{
	const pw = pwInput.value;
	$.post("save.php", { name, complete, pw }, function(data) { alert(data);} );
}