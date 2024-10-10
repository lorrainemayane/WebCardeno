// funcoes.js

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Carregar tarefas salvas
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => {
                tasks[index].completed = checkbox.checked;
                saveTasks();
                renderTasks();
            });

            const span = document.createElement('span');
            span.textContent = task.text;
            if (task.completed) {
                span.style.textDecoration = 'line-through';
            }

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    };

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            saveTasks();
            renderTasks();
            taskInput.value = '';
        }
    });

    renderTasks();
});
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const searchInput = document.getElementById('search-input');

    // Carregar tarefas salvas
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const renderTasks = (filteredTasks = tasks) => {
        taskList.innerHTML = '';
        filteredTasks.forEach((task, index) => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => {
                tasks[index].completed = checkbox.checked;
                saveTasks();
                renderTasks();
            });

            const span = document.createElement('span');
            span.textContent = task.text;
            if (task.completed) {
                span.style.textDecoration = 'line-through';
            }

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    };

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            saveTasks();
            renderTasks();
            taskInput.value = '';
        }
    });

    // Funcionalidade de pesquisa
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchTerm));
        renderTasks(filteredTasks);
    });

    renderTasks();
 
});


